function insertNodeAtPosition(head, data, position) {
    const myNode = new SinglyLinkedListNode(data)
    let node = head
    let i = 1
    while (node) {
        if (i === position) {
            myNode.next = node.next
            node.next = myNode
        }
        node = node.next
        i = i + 1
    }
    return head
}

function sortedInsert(head, data) {
    const myNode = new DoublyLinkedListNode(data)
    let node = head
    while (node.data < myNode.data) {
        if (!node.next) {
            myNode.prev = node
            node.next = myNode
            return head
        }
        node = node.next
    }
    const prevNode = node.prev
    const nextNode = node
    myNode.prev = prevNode
    myNode.next = nextNode
    nextNode.prev = myNode
    if (prevNode) {
        prevNode.next = myNode
    } else {
        head = myNode
    }
    return head
}

