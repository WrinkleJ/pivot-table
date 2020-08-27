import { BinaryTree } from '../src/BinaryTree';

describe('Test BinaryTree insert implementation', () => {
  it('Root is null by default', () => {
    expect(new BinaryTree().root).toBeUndefined();
  });

  it('Root is first insert element', () => {
    const bt = new BinaryTree<string>();
    const firstKey = 'first element';
    const secondKey = 'first element';
    const thirdKey = 'first element';
    bt.insert(firstKey);
    bt.insert(secondKey);
    bt.insert(thirdKey);
    expect(bt.root.key).toEqual(firstKey);
  });

  it('There are tree items in correct order', () => {
    const compareFn = (a: number, b: number) => a - b;
    const bt = new BinaryTree<number>(compareFn);
    bt.insert(20);
    bt.insert(18);
    bt.insert(22);
    bt.insert(17);
    bt.insert(19);
    bt.insert(21);
    bt.insert(23);
    expect(bt.root.key).toEqual(20);
    expect(bt.root?.leftChild?.key).toEqual(18);
    expect(bt.root?.leftChild?.leftChild.key).toEqual(17);
    expect(bt.root?.leftChild?.rightChild.key).toEqual(19);
    expect(bt.root?.rightChild?.key).toEqual(22);
    expect(bt.root?.rightChild?.leftChild.key).toEqual(21);
    expect(bt.root?.rightChild?.rightChild.key).toEqual(23);
  });
});
