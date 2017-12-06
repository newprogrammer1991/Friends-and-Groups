import {Map} from 'immutable'


export function arrToMap(array){
    let id;
    return array.reduce((acc,item)=>{
        id=item.uid||item.gid;
        return acc.set(id, new Map(item))
    },new Map({}))
}
export function mapToArr(map) {
    return map.valueSeq().toArray()
}