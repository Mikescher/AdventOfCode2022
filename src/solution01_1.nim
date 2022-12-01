import std/strutils
import std/algorithm

const input = staticRead"../input/day01.txt"

var elves = newSeq[int]()

var counter = 0

for line in splitLines(input):
    if line == "":
        elves.add(counter)
        counter = 0
    else:
        counter += parseInt(line)

elves.sort(system.cmp, Descending)

echo elves[0]