'use strict';

const BT = require('../Challenges/hashmapTreeIntersection/BT.js')
const node = require('../Challenges/hashmapTreeIntersection/node.js');
const hashmapTreeIntersection = require('../Challenges/hashmapTreeIntersection/hashmap-tree-intersection.js');


describe('🧪TEST🧪: Code Challenge Class 32 ➡️ Hashmap Tree Intersection', () => {

    const emptyTree = new BT();
    const oneNodeTree = new BT();
    const tree1 = new BT();
    const tree2 = new BT();

    oneNodeTree.root = new node(1);
    tree1.root = new node(10);
    tree1.root.left = new node(5);
    tree1.root.right = new node(15);
    tree1.root.left.right = new node(7);
    tree1.root.left.left = new node(3);
    tree1.root.right.right = new node(20);
    tree2.root = new node(1);
    tree2.root.left = new node(5);
    tree2.root.right = new node(3);
    tree2.root.left.right = new node(16);
    tree2.root.left.left = new node(3);
    tree2.root.right.right = new node(7);

    describe('Happy path 😄', () => {


        it('TEST 1 🧪: It should successfully handle a two trees with one intersection', () => {

            expect(hashmapTreeIntersection(oneNodeTree, tree2)).toEqual([1]);

        });

        it('TEST 2 🧪: It should successfully handle a two trees with multiple intersection', () => {

            expect(hashmapTreeIntersection(tree1, tree2)).toEqual([5, 3, 3, 7]);

        });

        it('TEST 3 🧪: It should successfully handle a two trees with no intersection', () => {

            expect(hashmapTreeIntersection(oneNodeTree, tree1)).toEqual([])

        });

    });

    describe('Edge cases / custom error ❌', () => {

        it('TEST 1 🧪: Should throw an expectation ⚠️, when passed the first tree as empty tree !', () => {

            try {
                hashmapTreeIntersection(emptyTree, tree2)
            } catch (error) {
                expect(error.message).toBe('⚠️You pass one or both tree as an empty tree !!!⚠️');
            }

        });

        it('TEST 2 🧪: Should throw an expectation ⚠️, when passed the second tree as empty tree !', () => {

            try {
                hashmapTreeIntersection(tree1, emptyTree)
            } catch (error) {
                expect(error.message).toBe('⚠️You pass one or both tree as an empty tree !!!⚠️');
            }

        });

        it('TEST 3 🧪: Should throw an expectation ⚠️, when passed both trees as empty trees !', () => {

            try {
                hashmapTreeIntersection(emptyTree, emptyTree);
            } catch (error) {
                expect(error.message).toBe('⚠️You pass one or both tree as an empty tree !!!⚠️');
            }

        });

        it('TEST 4 🧪: Should throw an expectation ⚠️, when passed the first tree as an invalid value !', () => {

            try {
                hashmapTreeIntersection(null, tree2)
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid tree !!!⚠️');
            }

        });

        it('TEST 5 🧪: Should throw an expectation ⚠️, when passed the second tree as an invalid value !', () => {

            try {
                hashmapTreeIntersection(tree1, null)
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid tree !!!⚠️');
            }

        });

        it('TEST 6 🧪: Should throw an expectation ⚠️, when passed both trees as an invalid values !', () => {

            try {
                hashmapTreeIntersection('', null);
            } catch (error) {
                expect(error.message).toBe('⚠️You did not pass a valid tree !!!⚠️');
            }

        });

    });
});