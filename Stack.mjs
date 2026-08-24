import { LinkedList } from './LinkedList.mjs';

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data){
        this.list.insertAt(0, data);
    }

    pop(){
        try{
            return this.list.deleteAt(0);
        } catch(e){
            return null;
        }
    }

    peek(){ // 스택 함수를 참조만 하고 제거하지 않음
        return this.list.getNodeAt(0);   
    }

    isEmpty(){
        return (this.list.count == 0);
    }
}

export { Stack }; // 외부파일을 참조할 수 있도록
