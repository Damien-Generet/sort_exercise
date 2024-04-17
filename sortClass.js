const fs = require('fs');

class SortingAlgorithms {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = this.readDataFromFile();
        this.parsedData = this.parseData();
    }

    readDataFromFile() {
        try {
            return fs.readFileSync(this.fileName, 'utf8');
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    parseData() {
        if (!this.data) return null;
        return this.data.split(" ").map((element) => parseInt(element));
    }

    bubbleSort() {
        let array = [...this.parsedData];
        let comparisons = 0;

        for (let n = array.length; n > 0; n--) {
            for (let i = 0; i < n - 1; i++) {
                comparisons++;
                if (array[i] > array[i + 1]) {
                    const temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                }
            }
        }

        return { sortedData: array, comparisons };
    }

    insertionSort() {
        let array = [...this.parsedData];
        let comparisons = 0;

        for (let i = 1; i < array.length; i++) {
            let temp = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > temp) {
                comparisons++;
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = temp;
        }

        return { sortedData: array, comparisons };
    }

    selectionSort() {
        let array = [...this.parsedData];
        let comparisons = 0;

        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                comparisons++;
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
            }
        }

        return { sortedData: array, comparisons };
    }

    quickSort() {
        const array = [...this.parsedData];
        const valueArray = this.quickSortHelper(array);
        const newArray = valueArray[1]
        const comparisons = valueArray[0]
        return { sortedData: newArray, comparisons };
    }

    quickSortHelper(array) {
        if (array.length <= 1) {
            return [0, array];
        }
    
        const pivot = array[0];
        const left = [];
        const right = [];
        let comparisons = 0;
    
        for (let i = 1; i < array.length; i++) {
            comparisons++;
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
    
        const [leftComparisons, sortedLeft] = this.quickSortHelper(left);
        const [rightComparisons, sortedRight] = this.quickSortHelper(right);
    
        return [comparisons + leftComparisons + rightComparisons, [...sortedLeft, pivot, ...sortedRight]];
    }
}
const fileName = process.argv[2];
const sortingAlgorithms = new SortingAlgorithms(fileName);

const bubbleSortResult = sortingAlgorithms.bubbleSort();
console.log(`${bubbleSortResult.comparisons} et : ${bubbleSortResult.sortedData}`)

const quickResult = sortingAlgorithms.quickSort()
console.log(`${quickResult.comparisons} et : ${quickResult.sortedData}`)