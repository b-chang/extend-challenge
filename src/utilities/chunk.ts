export default function chunk(array: any[], size: number): Array<any[]> {
    let i,j,temp, newArr = [];
    for(i = 0, j = array.length; i < j; i += size) {
        temp = array.slice(i, i + size)
        newArr.push(temp)
    }
    return newArr
}