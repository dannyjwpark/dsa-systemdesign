var mergeKLists = function(lists) {
    let allList = [];
    
    function breakList(listings){
        if(!listings) return;    
        
        for(let list of listings){
            while(list){
                allList.push(list.val);
                list = list.next;   
            }
        }

    }
    
    breakList(lists);
    allList = allList.sort((a,b) => b-a);
    console.log(allList)
    
    let node = new ListNode(0, null);
    let head = node;
    
    while(allList.length>0){
        let num = new ListNode(allList.pop(), null);
        node.next = num;
        node = node.next;
    }
    
    return head.next
};