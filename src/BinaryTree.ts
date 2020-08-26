export enum ECompareResult {
  /** first argument more second argument */
  MORE,
  /** first argument less second argument */
  LESS,
  /** first argument equal second argument */
  EQUAL,
}

export type TCompareFunction<TItem> = (a: TItem, b: TItem) => ECompareResult;

class Node<TItem, TKey> {
  public leftChild!: Node<TItem, TKey>;
  public rightChild!: Node<TItem, TKey>;
  constructor(public readonly key: TKey, public readonly data: TItem) {}
}

export class BinaryTree<TItem, TKey> {
  private _root!: Node<TItem, TKey>;

  constructor(
    private readonly compareFn: TCompareFunction<TKey> = () =>
      ECompareResult.EQUAL
  ) {}

  get root() {
    return this._root;    
  }

  insert(key: TKey, data: TItem): void {
    const newNode = new Node(key, data);
    if (!this._root) {
      this._root = newNode;
      return;
    }

    //TODO: replace to recursion
    let current = this.root;
    let parent;
    while (true) {
      parent = current;
      const newNodeIsless =
        this.compareFn(newNode.key, current.key) === ECompareResult.LESS;
      if (newNodeIsless) {
        current = current.leftChild;
        if (!current) {
          parent.leftChild = newNode;
          return;
        }
      } else {
        current = current.rightChild;
        if (!current) {
          parent.rightChild = newNode;
          return;
        }
      }
    }
  }

}

// class BinaryTreeIteratorInOrder<TKey, TItem> {
//   constructor(private readonly tree: BinaryTree<TKey, TItem>) {}

//   [Symbol.iterator]: () => {
    
//   }
// }
