
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'

import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE={
  COLUMN:'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD:'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  const pointerSensor =useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor =useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  const touchSensor =useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])


  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null)

  useEffect( () => {

    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column.cards.map(card => card._id) ?.includes(cardId) )
  }

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN )
    setActiveDragItemData(event?.active?.data?.current)
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
    }
  }

  const handleDragOver = (event) => {
    if (setActiveDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return
    }
    const { active, over } = event

    if (!over || !active) return

    const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } =active
    const { id: overCardId } =over

    const activeColumn =findColumnByCardId(activeDraggingCardId)
    const overColumn =findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns(prevColumns => {

        const overCardIndex = overColumn?.card?.findIndex(card => card._id === overCardId)

        let newCardIndex
        const isBelowOverItem = active.rect.current.translated &&
            active.rect.current.translated.top > over.rect.top + over.rect.height
        const modifier = isBelowOverItem ? 1 : 0

        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        const nextColumns = cloneDeep(prevColumns)
        const nextActiveColumn= nextColumns.find(column => column._id === activeColumn._id)
        const nextOverColumn= nextColumns.find(column => column._id === overColumn._id)

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
          nextActiveColumn.cardOrderIds= nextActiveColumn.cards.map(card => card._id)
        }
        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
          nextOverColumn.cardOrderIds= nextOverColumn.cards.map(card => card._id)
        }

        return nextColumns

      })
    }
  }

  const handleDragEnd = ( event ) => {
    const { active, over } = event

    if (!over || !active) return
    // console.log('handleDragEnd: ', event)
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } =active
      const { id: overCardId } =over

      const activeColumn =findColumnByCardId(activeDraggingCardId)
      const overColumn =findColumnByCardId(overCardId)

      if (!activeColumn || !overColumn) return

      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        console.log(oldColumnWhenDraggingCard._id)
        console.log(overColumn._id)
        setOrderedColumns(prevColumns => {

          const overCardIndex = overColumn?.card?.findIndex(card => card._id === overCardId)

          let newCardIndex
          const isBelowOverItem = active.rect.current.translated &&
              active.rect.current.translated.top > over.rect.top + over.rect.height
          const modifier = isBelowOverItem ? 1 : 0

          newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

          const nextColumns = cloneDeep(prevColumns)
          const nextActiveColumn= nextColumns.find(column => column._id === activeColumn._id)
          const nextOverColumn= nextColumns.find(column => column._id === overColumn._id)

          if (nextActiveColumn) {
            nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
            nextActiveColumn.cardOrderIds= nextActiveColumn.cards.map(card => card._id)
          }
          if (nextOverColumn) {
            nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

            nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
            nextOverColumn.cardOrderIds= nextOverColumn.cards.map(card => card._id)
          }
          console.log(nextColumns)
          return nextColumns

        })
      } else {
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId)// lay vi tri cu tu active
        const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId)// lay vi tri moi tu over
        const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex)
        setOrderedColumns(prevColumns => {
          const nextColumns = cloneDeep(prevColumns)
          const targetColumn =nextColumns.find(c => c._id === overColumn._id)
          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds =dndOrderedCards.map(card => card._id)

          return nextColumns
        })
      }
    }
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id !== over.id) {
        const oldIndex = orderedColumns.findIndex(c => c._id === active.id)// lay vi tri cu tu active
        const newIndex = orderedColumns.findIndex(c => c._id === over.id)// lay vi tri moi tu over
        const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
        //api
        // const dndOrderedColumnsIds =dndOrderedColumns.map(c => c._id)
        // console.log('dndOrderedColumns: ', dndOrderedColumns)
        // console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds)
        //cap nhat khi keo tha
        setOrderedColumns(dndOrderedColumns)
      }
    }

    //
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumnWhenDraggingCard(null)
  }

  const customDropAnimation ={
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } })
  }
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Box sx={{
        bgcolor: (theme) => ( theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width:'100%',
        height: (theme) => theme.trello.boardContentHeight,
        p:'10px 0'
      }}>
        <ListColumns columns={ orderedColumns } />
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeDragItemType && null}

          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ) && <Column column={activeDragItemData}/> }
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData}/> }
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent