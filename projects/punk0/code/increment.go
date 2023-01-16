package main

import (
	"fmt"
)

// increment the first of a list
//   [1,2,3,4]
// returns:
//   [2,2,3,4]
func increment(x []int) []int {
	r := []int{}

	for i, v := range x {
		if i == 0 {
			v++
		}
		r = append(r, v)
	}

	return r
}

func main() {
	fmt.Printf("%v\n", increment([]int{1, 1, 2, 3, 3, 4, 1, 2, 7, 1}))
}
