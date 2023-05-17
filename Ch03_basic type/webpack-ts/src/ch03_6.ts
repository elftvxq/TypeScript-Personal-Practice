// union
const arr7: (string | boolean)[] = []
arr7.push(false)
arr7.push('')

let liveName: string | number
liveName = 'bruce'
liveName = 99
// liveName = false

// never 永遠不可能發生
// if (typeof liveName === 'string') {
//   liveName.split()
// }

// 強制斷言 
let liveName2 = 999

// ....

let liveName3 = liveName2 as unknown as string