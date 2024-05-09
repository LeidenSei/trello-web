import Box from '@mui/material/Box'
import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'

import ListItemIcon from '@mui/material/ListItemIcon'

import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 36, height: 36 }} alt='HoangToan'
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgVGhgYGBoYEhgSGRgYGBgZHBgYGBgcIS4lHB4rHxkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzQ0NDE0NP/AABEIANUA7QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAD8QAAEDAQQIAwcCBQMEAwAAAAEAAhEDBBIhMQVBUWFxgZGhIrHBBjJCUtHh8BPxYnKCkrIUI6Jjc8LSJENT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJBEAAgIDAAMBAAEFAAAAAAAAAAECEQMhMRIyQSJRE0JhcYH/2gAMAwEAAhEDEQA/AHbCPCEwg2MeEI6ZCz9maCkFG8s/UC1g8W/hMpd6YaZUXswRkrQYNReyorTKZs8wjGjKkKUKVHRLJGqJlshCeAAjxgk6gxVJcIYr8tAWNxTFzBDpiSAASTgABJJ1ADWur0ZokMh9QAvzDcCGcdRd2G9StJbKzUm9FNYtCVH+IwxpyLsyP4W5nnAR7ToRzRLHX41Xbh5YmVa2/S7KZIJLnbBjHE6klT9oKZweC0/3Dtj2QU5LgP6afShIUCE3bLZT/WcXi805Fhi9IBaTvxjV2RWus5Z+pcc1rTBBeSXuiQweI8ScPMiv9ZfUSeF/yK0LI9+LRhtJgfflKXt2h6kyAHR8rsehhT0jp5zhcpwwAQbufBvygfkZKk/XeHXg4h22TPVI5yZRYY1sK8um7BBGYIgjiFgsk5qystuZWAZUAD8mP92TsnVwyKFVY5uBG0cY8uHngS8Z3pkZ4/HaKW1U7hyTdiq3gmalIOGKHQoBqaqZMMAtKRUSnAaKBavdKOUG0+6Vgo58jEobwjayoOauafsd+NfkE0JS0Zp4NSVoGKCC+Hp1kHhCM5Cs3uhFKsjll7MWKFUqQYTZYgvpYpGmXjONDFnyUbVUgIjcAlbXjCouUck3bsNROElZ+qsHuhAe4AJW6K44KS2Ml4QnUHPIa0FznGABrKhZmOe4NaCXOMADWV22itGNotnAu+N41/wM2NnM646JKeh1DxemKaI0MyztvOIdUIxdqaNYZ9dfBVWldMFxLKZgDAuGZ3DYFZ+0VqusI+bADK8f/UYc43rjbRUuN3+ZSRV7ZSwFrtIbvOoeqqnVHvOs7hJHZOsspcbz9erbxRnw0YD9hmmB0UpkuEOBkRmIka+0qVtrPLGsbk2cjHvGSeP0RWExih1HgROvBYaiqFZzMCDwPomWPDhIR61MOEFIOBYdoPf7rA4FKvtH2wVWlr8XAYxm5oyeP429xOeSojiJC1SqFjg5pgtMhBqzF/aKBYYOM4tIycNo9Rq6EghPWe0MexrXeEPm4c7jxmz6DWMNQSdRhaSHYEGDr6bRkeBVcc70+nLkx+LtcNKsttoLSrNKWygDiqPhIyhUlslZaTLSq2pVPutTTGEMxWQUVWsrTlvWVu6ueXT0MPqDCRtOasSWhI1ntlBBkelWYeEIyHZx4Qo13wq3SOSXWGCi9DokrTqmKKkK0MObggMGMFFfUwQWU5MrN/wLQao3BK1WSrC5gndE6NvuBIlrTryc7MN4azuB3JZL6XxTUVRYezGiLjb7vfeASdbWHENGxzszsEZSr20wAAB9gNiPTZAjPadZOslI6bfFJ0YE4A7Jz7So9Gu3bOJ0xav1KhPwtwb9fM8wqcMvOvnL4Ru28029s4HXieGoenIoVU7MzgE6GBPdh+ZpcMnP8j7yUWqMYHw4DicB+b1J7YgDUB+d1gitUx39Puh1hhzHfD1W7WYbOz1w9VlTEHgsEHdjDV+YIbmB0jt9EUGUN+GPXgsYSZLTdORyK3UGv8xTNpp3mzr8jqKX95u/LgVgDmjnh16k4wHxdPyvHun0T1G0Gqwh+FWkCHfxMaTPNpk8J5UbTkRxVja6rmup2lmBf72y+zB07nDVxQ47QGrVDYQrT7pQaz4eC2bj2h7NwObTvaQRyB1pd9qN+FeMk0cbi0zLLZcZKatA8JRGodp90prBRQPqhpKCarnZIrmAkqbWrnl07sVuIuyltS1oYJVjCQtfvJUyjWj0H/VXQApX7y1RYHDFHFBVe1o42v0wlEYKFajOKLTZC3VOCaK1sWQsxpJhPMZgg0AAJRmVJMDElNpCB6FGc8AMXHYPrsXV6Mp3aYdESPCNjT6nAnkqSw2a+9tMe63xPI1kZ8vhHM610FodJAH40Z+g5qWSXwrjjuwtKoBMnElUXtNbWiGTvMY54eQPVWFJ9687VN0cGmCes9AuM0tWv1CdRJjgMB2lTitlqMdaGmSWyTjiBlqHRJ2h4Li5oADQAP5jiTyGPJY8wln5Rtz4uz7SnoawLjlzd9B3HRMsaC4NOTmgdAPol35/29ypF8Fp+X6n6oGQK22dwBBGcgbyg0mksB3CeiZtFqeQBORG47PVK08ARx85HZYP0Cw4A8jyw80VjA7w69XHYUrSf4nNOsnzRC6BOw4/XyKxkaZgS08Dw+3ogvZDjv8AMfbyTFofLr23A/XrHVCq4/mzJYws0YcJHQqwsgv0qjNbR+o3i33uow5pFuv8zAKY0VVu1GE5E3Twd4T5rS4BBLBUD2tp/E0uLJ1y2S3di3uNiGLL47yr3S0jUQRBGBkJ9ukgXccTxOLu5KeDpkMqXSxhAtQ8JR2PkSgWs+EqpFFDrK2taytyuaXTuxepirrWfErEhI1qeOaCHkehMBACapPlbDJaoUzBVEmmcsmglQwEA1E1dlCfQT0SYCrXgQEzoyZL/kF7nIDf+RB5JJtOXQr7Rtmlt0ZuexvW8fQdEfglNyL/AEJZrlK8c348GjLrieahabXDHvGo3GcsyOc/2hH0pX/Tpm7hgGM3ah0CprQZbRpjIhpP9Zw8z1UOuzriqRZP/wBujvaz/lH1XFvPj4DzXX6cfFJw2kDvPouOf8W8gdh9VojA6hwG/wAs/IIAxg7ZPoOyla3wDwjr+xWtw3D69kTC73Y/1AdllYSDGerjqW7Y26RqxaeWI9FsrBAk3m8R5oYOvaJ/Oo6LbDBLdmI4H7yonyPb9isERrsIc5w1EcpGCM14dB24Hj+T2TNmoX3PadYHkUjdLHFh5cdRWsBNmLYOYwWF2E/m9RvQ/c4d/wA81OMx+Y/hWCBa2C7j6BQZhyJ8yiMMyeHkEM5c/wDyWACtLpc46i5x6uPkpCz33yBAwjgAAD281B+vcfz1TeiR4o/h8iPqU0eksiuJaUGQ2EG1s8JTcIFq90qtHOmc68AEoRrbFOoySVjaYChLp3Y9xBS5yVrMcDmrJgxStpGKVMdrR6Yw4Jao/HBNMGCh+mqtP4ceiNF6M/JDczYoCphCZa6LL/BlkpYyV0mgG+M/wi9zgtH+ZPJUNmcIXR+zuTzvaOk/VaTqIIK5IB7RWjxBupgLjxP2QKBvV2DULo/sZ9Qk9Nvmo8bXEcm/gR9EPvVQf5j1afqpVSOi7dDOmXzTP/cI6BwXMvOPPyCv9KPmm7dWf5ErnHnxxxPYD0Ky4MKWx+MbCD0j7pmw07x4YdhPokagvPIJw8XZMUbdSY2XVCCScnNBzOrPsizJhdOtwDt3kfuUq10gHao2u0sqMNx7ngYmKkwMpc0gEDel7E+W5zGGpBGs3aMCHbMDwKx+fEeX52RntkEbUq0mIObO/wCBYI5orFx4BZpiyXheGYS1mqXXmXlrXDAi7uMYjiivtbI8b3tB+eo1k8Bmh9Deioe6Wg62nzx80yx047R5ful6tRl43HyDnD2uyM+UrKJh12cicxBg4+iIoSgMDxP0UHDw8p9UZuDZ4nuShuHh5eiwRdwxPP0+qstE08C468Byz7+Srarve3eoEK30Y7wDcSPX6J49JZPUcQLV7pTCBavdKqc5zhzK3Kx2ZWlzz6d2L1JMzStpzTLc0paTikRVnp7clixuS2ug4GbAQqtLBFChXfARaTFbIUKautD17lxvzVDPNga3uVTU6oCODiCNn7LOKaoWMqdhrbSDnvOsVCOsn0W9BmKrR/MOjT9Fn64c95OTz4o1EhpJHA9RxQbI+5XbiCC4Yj+IADzKSS/JWEv0wtvdjVb/ANQO/wAgf8mqiq++DtBHT91daaP+44g4O9MCOrVT1xkdh88D5pVwuc5pKo8vLGAi84tnUccgVW1aLWktc43oMRlex8PYdV29ls7XN8QBF93cugjYZISlu0OHVC8CXAyQIEtIGOOEyHcimg4+WyOWMvFtbOKosJe0TF4wCN+C6GhRez3tpB459wVa2Sw4hpphrGkPktbN8GRdg4DLvtTtqph2B+LDgRkfPsjk8U9OwYPJq5KiplK1vC4O1HA+hTrbKQ3DVII3gxI45wl6rJBB/ZTOkjRZevMGZbLDsIMg8iei5y22a6+KjnXjJJiYM4dc53hX1jrFrhIxYTG/DEdD5JvSthFUsqMEkQDEAlszr1jHDemjXlsllTcX4nCgY4qwoVH03tDsREg4nA/ur86MvMuCkGtm8XkAEEamiZxiOalarKLlN8CSGjLVd+nkmn4p0nZPD5tW1X+wBHhjcB1wUauRRH6hv8sfRDq5fm1TOkUqMknYPOFbaKHgO93kAPRVjz4omM/IRCsNH1g1h3GeUD7po9JT5osUG1e6VlK1B2SDb6wDSq2jncXdFE7MrSgHySpqEunbi1E21KWjNNsStoGKVFD1BuSWqE3k0ECsVc4TZq7EN9NzkalT1lHlERoqSyHYq1ouBGCXtNlvYollYWhZC0EOB4+Y/B0TOirOHueD8TXQflLYukc2ygFOaEf/ALxGym8nmWgfm9CeojY1cim0o+XucMLxDuBIBPeQUqXTgeYT2l6N2q8fC6eU4+p6KtewwCMx3jMeamuHUN6PMte05g+mBTThiDyPP7+aWs1F7WipdljiWOLTegjKRmNvApslKxkQchPCKUNwShE6jg3P4j6fZQqUQ7Mc9YULfN7lh6+iZa3BEYQZY4cQ4S10Y6w4ZHccxPBGpU3UzHvMPVp2x9E2AtoWCiKqrTgym3cD0aB6q1dkqa2v8camgN/PzUsumYm7PgPP9lGrlzHmFMaz+YINd2W8hOAQtJN+N0/nRFouMZ5+HvPke6FaXRUB/h9Ss/VJcOw2IhS0XdlohrZCqreXGVdWY+FV+lHtAKdrRCL/AE7KSzZpoJWznFMhSfTojwmxLWjNMNQLRmghj1AKJYFJbarnCbat3VgUgmEZkLRW1ooikSjezbpqvdquHpeZHYJO1vhsa3YfUp32bZIqn5rjB/WXD6KOWXw6sEKi5f8ACWnrPgx+667jmPVc9UfiBw9fou7ttIPY5pyI6bCvPq7vGOPpA7kpIvQ5c6CtIvmi8+GsMNz25HmPIIlZhaS05gkLn7SSIc0wWmQRqIxBG/ALpRaBaKTazfeADajRqcB70bD+ZFFoy6KFRcpOUSkGAV6QcIP7KULZeMpUS8bR1WGNrS2olYxGq+6CTqBPRc81xMu1kk9M+WBKtdK1Q1kExeIE7Bt8uqr6DfA5+WTRxeZI/tDwihX0BEBK2t3u8Z6JtyrrS6XxsHn+BOgMHaB42zrEdDKsv9E2WEbexafsqu3ui44avsVM2wiIywI4HL6IpiuMnpM6JlO6IVJpemc0w3SWCDaLUHtTOSaEUJRdsprOE0EvRzKOFJl48CNS9fNHagV80EOepFaBWytBXRwkwpBQCmEyEkbUSpIdR8CURSutT5ceg5Zn83LofZqnDAfme539LGQP+RXNvdeLnjV6a+P2XY6HpwyPkZd/qLrru7J5rmmnZ3xnGWJKPwzStW7Ted0f3Yeq4WAS2TF97BOcAvH1JXWe0tSKYb8zvT6kLkLa03ZHwXX9HCO09ForQjGLZZyxxY7Np5bQq+waRfZql5uWILTk5vyn6q+0+3/cvD42tPp6LktL1SwggDHXOvKPJMtoDdHbAsqs/VomW/E0+8w7CNm9LuXNey2kn/qmPCbpy1wRgRrGJwXWPDX4sF1+tmo72f8ArnslI010aMrFHkxghsJ1iEQrSAxpDq1A0EuIAGJJwWVqwbnns1rmfaG1OIbMwScBlhHXPNFKzN0rNaU0kKhF2boMN2naeGSsKmFNjfmLnnhgxv8Ai/quZpPEsG0z1dHoultmYHytYByHi/5FyZqtCRdijyqovvEu58pjyTlvq3WHacBzSNhE9CO6wzCaQxZOwg+nqEpSdLRuw7gjzPROVBLHDXHl+yrrNOIG49J+qYMWOPpQFOztEFLueckehTMSghsj/IG7iVILWsrAhLouP1CMQa+aKzNDr5pSnw9PKxYtK6OEkFOUO8tVnwJTCMLeStucbphJ0rf4sU1UrtN3efQn0W2LafAOjqUQTk3xHgzxRziOa7PRrC2k2cyATxgz3x5rnLJdfDP/ANHtZyBBd5sXU1XbNp7QFDL06MOo0c17T1MWN4n86Ln7I8PFWT4fdncGmT3KsfbOq4PaGgklkCBJm8ZPRcpTquawsyl0nfgIHZNjVjZGkjqtJuvUqD9tMA8QG/dctpxksn5SOhw+i6Rz71jonYXDoXj0CpbUy80tPxA9dSC0w9iKeyjCXPIGV0zGyQWzqPinkuovT6hDo2RjGXWYQBBGJkD3t5z4ylaVtJdcqsAcMWlpPjb8zNfETPFaW2CL8R6o9xxz45nnr59UJ145eHufoO61UeG5HhJHi/ldt4/dBp2pr/ddMYYYEnfsA2pKKeSJ/pNbicSdZxJPqqr2io3qZ8Mu+AAS6AQXu3CNW8K6c5rGlziBAku3eaSsTC8ms8QXCGNPws1TvdmeSZKhJStUcMx+LDqEf5uXVW0m+ZzETxgXu8qlraODLQykDeBexv8AS94wO/3grbSFTxv2l7u5KMvgIfSk0pUkgah+H83KOjzj19FDSAh0DUtWB3i5H0QK/wBo88w7j+fnFG0awEOBiQfMnE8SEtaHQJ2YrdgfdqR82HEkT/4HqmROXNDVawCZU3MusKbe5K2l3hKdRRFzlLTKYnEqQUScSttKlPp04/UmzNQr5qTDih1zilKfD05zwFEVAUrbHGEOxvwxVzhb3RK2WgjJYyrfZigW1pJwUrGzamjpWyUm3KkDp2GTmt2ixuEQfyCrOnThSq5Hr0Rv6ZRo17N0D/qWAmRTpl5/mcJn/m0f0rp7Q+B/U3u4D1XP6KeGWis6fcpP6NLPQK20i+GE/LdPRwPoufI7Z1YlSKD2yqlpZBi81wPAFuHdcc4rrfbUYUz/ADjrdXFWmpdG85K2L1I5PY6Zlb/41Jm+o7o8geZVVbKl0t/mA/ukI2inTQM/DdA/rfUcf8VUaYr+K7sunpe+oU6tstdROvsVpvsa7U8Ag79bTzn8CU0hSEXXDDNhBuljtV12r6cCqv2YtgLXUncW8/v5q4tRLmnxAANcbx2gQCd2JPJZoC4cvaK1Sq64Xg3J8QGYmAQN/wCb1qlEteAx8zEgkXgYOPDBKWkvbJaSA43TG4A58SlKNYteH5kY465EZrKNqxG35aZ1Vhc6s4OqkljCBBk3nRIvbsMvqr4WiQXRDWg8SqLQjC41DqyGPxTIw5J3S1rDKN5uuLvHV3x5FCJSylsVW/bmH/qN4YHHuJTtqPjfuc7rP7Kh0RVu16TjqqM/yCvrcIe8fxu8ytJbDDjKLSL4fOe4iQctSaY9hDXNaBOcCNRkJTSwxB2z6JaxPN4DUfQFP8Fd+RZvxngYR7BSF4k5thvnJ44JZrr0bzHUwnrNm87XntP1Qj0M3obc5LWg+EojnJeucE5AqycSpNKGTiVsFRl07IeoRqhXOK20qFbNAc9FrOvYIDaZajUBrRVZHC1YuysJghOMaErXpQL8GAQJ3mSB2KWfbnZCB380UrF4WxeAOCrrTpMZME7zgOir69oc7Mk88OiWZXa1wLsQCJG0A4jmE9Asuqdqh9Rx/wDts742SWXnRwcxw5K+dar9AH56ZP8AU0CR1Dui4S02x4Zi0ABxGA8JDgcWE4gETIBjIp32c02Gg0qhwm8wnacHM5gmN/FRnG1aLQdOmWenat+yB4xNNzb3+Pq0rgaryTJXU2HSTZfSqZOljwNYxF5u/Wue0nYnUn3TiDixwye3U4fmCMXWjSV7LKzW1tOzS7N7xdaM7rGQTwvOKo7VWvvLtqG5/bAdZ8yeq3Z6Re4Mbm4wEVGtmu1Ra+ztkc99/JjcD/FPwrqLW7wRtgfZCsVBtNgY3V3OsqdfGNxBSt2MlRxuk6BaS3VMjd+egVexkkA5ZmRGWpdA9oqVHvIlsljeWZHOUKpYWQQJmDr16suaVNoVxTdlpoBl1hMYk4mIKQ9o6JLA4EwxxDhqx909ICf0PVmmDtmeOtSqgOc9hye0HtHoshjiQ4g4Zrp7faA918fG1j+bmie8rnLXRLHlp1HtqRrJajg06pA4SSB1LuqeSvZouiWksQDsJH50SVF90k7sOJT1tMgjn0z7KrJWXDS6N/6kta2Djn3KesmkgAA/XJkbzMkKmBWiVuAezqxVDhIIIQ6zsFzTKrm5OI4GEy3ST4gweUHsjYviHJxK2EoLUNYPmjsqg5FTktl4PVBmlQrZrbStVs0pX4ejUxAUwVtYrHEN6fF2hRaMjLjvddbj/wAiuYcVixNi4LPoF5VfbtS2sTy4LHoi5xykxsnATuUHFYsSDg3PPl2yRTbn3LhMt2OAdjtBIkHgsWIBFCug9m6Agv1zdG4GD69lixaXAx6XxKTtlUtp1HDMAxugR91ixTY4i2kG0acagD/diVCe6xYsY1od5AqN1NeY5hMVneMHdHf7rFiwSm9oKYwdrVGsWJlwVhv1iW443fXCEsVixZGZigsWLMxhWisWIGMWLFiJhyx1ScCmKxxWLFN9Lx4f/9k=">
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem >
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem >
          <Avatar sx={{ width: 28, height: 28, mr: 2 }}/> My account
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles