var deleteNodes = function(head, m, n) {

  let curr = head

  while (curr) {
    for (let i = 0; i < m - 1 && curr; i++) {
        curr = curr.next
    }

    if (curr === null) break

    let breakPoint = curr

    for (let i = 0; i <= n && curr; i++) {
        curr = curr.next
    }

    breakPoint.next = curr
  }

  return head
    
};