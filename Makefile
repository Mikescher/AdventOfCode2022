
run_latest::
	nim c -r --verbosity:0 --out:bin/ "$(shell ls src/*.nim --almost-all -v | tail -1)"


js::
	find src/ -type f -print0 | xargs -0 -n1 nim js -d:release --out:js/

build::
	find src/ -type f -print0 | xargs -0 -n1 nim c --out:bin/


run_all::
	find src/ -type f -print0 | xargs -0 -n1 nim c -r --verbosity:0 --out:bin/ 


run_01_1::
	nim c -r --verbosity:0 --out:bin/ "src/solution01_1.nim"

run_01_2::
	nim c -r --verbosity:0 --out:bin/ "src/solution01_2.nim"