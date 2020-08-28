class Node<TItem, TKey> {
  public leftChild!: Node<TItem, TKey>;
  public rightChild!: Node<TItem, TKey>;
  constructor(public readonly key: TKey, public readonly data?: TItem) {}
}

export type TCompareFunction<TItem> = (a: TItem, b: TItem) => number;

const DEFAULT_COMPARE_FUNCION = (a: any, b: any) => a - b;

export class BinaryTree<TKey = string, TItem = {}> {
  private _root!: Node<TItem, TKey>;

  constructor(
    private readonly compareFn: TCompareFunction<TKey> = DEFAULT_COMPARE_FUNCION
  ) {}

  get root() {
    return this._root;
  }

  insert(key: TKey, data?: TItem): void {
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
      const newNodeIsless = this.compareFn(newNode.key, current.key) < 0;
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

  getElementsInOrder(): Node<TItem, TKey>[] {
    const items: Node<TItem, TKey>[] = [];
    this.inOrder(this.root, (node: Node<TItem, TKey>) => {
      items.push(node);
    });
    return items;
  }

  private inOrder(
    node: Node<TItem, TKey>,
    callback: (node: Node<TItem, TKey>) => void
  ) {
    if (node) {
      this.inOrder(node.leftChild, callback);
      callback(node);
      this.inOrder(node.rightChild, callback);
    }
  }
}
