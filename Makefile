
run_latest:
	nim c -r --verbosity:0 --out:bin/ "$(shell ls src/*.nim --almost-all -v | tail -1)"

run_01_1:
	nim c -r --verbosity:0 --out:bin/ "src/solution01_1.nim"

run_01_2:
	nim c -r --verbosity:0 --out:bin/ "src/solution01_2.nim"