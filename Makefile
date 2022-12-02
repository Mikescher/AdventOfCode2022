
run_latest::
	nim c -r --verbosity:0 --out:bin/ "$(shell ls src/*.nim --almost-all -v | tail -1)"




js::
	find src/ -type f -print0 | xargs -0 -n1 nim js -d:release --out:js/

build::
	find src/ -type f -print0 | xargs -0 -n1 nim c --out:bin/




bin/solution00_2: src/solution00_2.nim
	nim c --verbosity:0 --out:bin/ src/solution00_2.nim

run_01_1: bin/solution01_1
	./bin/solution01_1

bin/solution01_1: src/solution01_1.nim
	nim c --verbosity:0 --out:bin/ src/solution01_1.nim

run_01_2: bin/solution01_2
	./bin/solution01_2

bin/solution01_2: src/solution01_2.nim
	nim c --verbosity:0 --out:bin/ src/solution01_2.nim

run_02_1: bin/solution02_1
	./bin/solution02_1

bin/solution02_1: src/solution02_1.nim
	nim c --verbosity:0 --out:bin/ src/solution02_1.nim

run_02_2: bin/solution02_2
	./bin/solution02_2

bin/solution02_2: src/solution02_2.nim
	nim c --verbosity:0 --out:bin/ src/solution02_2.nim

run_03_1: bin/solution03_1
	./bin/solution03_1

bin/solution03_1: src/solution03_1.nim
	nim c --verbosity:0 --out:bin/ src/solution03_1.nim

run_03_2: bin/solution03_2
	./bin/solution03_2

bin/solution03_2: src/solution03_2.nim
	nim c --verbosity:0 --out:bin/ src/solution03_2.nim

run_04_1: bin/solution04_1
	./bin/solution04_1

bin/solution04_1: src/solution04_1.nim
	nim c --verbosity:0 --out:bin/ src/solution04_1.nim

run_04_2: bin/solution04_2
	./bin/solution04_2

bin/solution04_2: src/solution04_2.nim
	nim c --verbosity:0 --out:bin/ src/solution04_2.nim

run_05_1: bin/solution05_1
	./bin/solution05_1

bin/solution05_1: src/solution05_1.nim
	nim c --verbosity:0 --out:bin/ src/solution05_1.nim

run_05_2: bin/solution05_2
	./bin/solution05_2

bin/solution05_2: src/solution05_2.nim
	nim c --verbosity:0 --out:bin/ src/solution05_2.nim

run_06_1: bin/solution06_1
	./bin/solution06_1

bin/solution06_1: src/solution06_1.nim
	nim c --verbosity:0 --out:bin/ src/solution06_1.nim

run_06_2: bin/solution06_2
	./bin/solution06_2

bin/solution06_2: src/solution06_2.nim
	nim c --verbosity:0 --out:bin/ src/solution06_2.nim

run_07_1: bin/solution07_1
	./bin/solution07_1

bin/solution07_1: src/solution07_1.nim
	nim c --verbosity:0 --out:bin/ src/solution07_1.nim

run_07_2: bin/solution07_2
	./bin/solution07_2

bin/solution07_2: src/solution07_2.nim
	nim c --verbosity:0 --out:bin/ src/solution07_2.nim

run_08_1: bin/solution08_1
	./bin/solution08_1

bin/solution08_1: src/solution08_1.nim
	nim c --verbosity:0 --out:bin/ src/solution08_1.nim

run_08_2: bin/solution08_2
	./bin/solution08_2

bin/solution08_2: src/solution08_2.nim
	nim c --verbosity:0 --out:bin/ src/solution08_2.nim

run_09_1: bin/solution09_1
	./bin/solution09_1

bin/solution09_1: src/solution09_1.nim
	nim c --verbosity:0 --out:bin/ src/solution09_1.nim

run_09_2: bin/solution09_2
	./bin/solution09_2

bin/solution09_2: src/solution09_2.nim
	nim c --verbosity:0 --out:bin/ src/solution09_2.nim

run_10_1: bin/solution10_1
	./bin/solution10_1

bin/solution10_1: src/solution10_1.nim
	nim c --verbosity:0 --out:bin/ src/solution10_1.nim

run_10_2: bin/solution10_2
	./bin/solution10_2

bin/solution10_2: src/solution10_2.nim
	nim c --verbosity:0 --out:bin/ src/solution10_2.nim

run_11_1: bin/solution11_1
	./bin/solution11_1

bin/solution11_1: src/solution11_1.nim
	nim c --verbosity:0 --out:bin/ src/solution11_1.nim

run_11_2: bin/solution11_2
	./bin/solution11_2

bin/solution11_2: src/solution11_2.nim
	nim c --verbosity:0 --out:bin/ src/solution11_2.nim

run_12_1: bin/solution12_1
	./bin/solution12_1

bin/solution12_1: src/solution12_1.nim
	nim c --verbosity:0 --out:bin/ src/solution12_1.nim

run_12_2: bin/solution12_2
	./bin/solution12_2

bin/solution12_2: src/solution12_2.nim
	nim c --verbosity:0 --out:bin/ src/solution12_2.nim

run_13_1: bin/solution13_1
	./bin/solution13_1

bin/solution13_1: src/solution13_1.nim
	nim c --verbosity:0 --out:bin/ src/solution13_1.nim

run_13_2: bin/solution13_2
	./bin/solution13_2

bin/solution13_2: src/solution13_2.nim
	nim c --verbosity:0 --out:bin/ src/solution13_2.nim

run_14_1: bin/solution14_1
	./bin/solution14_1

bin/solution14_1: src/solution14_1.nim
	nim c --verbosity:0 --out:bin/ src/solution14_1.nim

run_14_2: bin/solution14_2
	./bin/solution14_2

bin/solution14_2: src/solution14_2.nim
	nim c --verbosity:0 --out:bin/ src/solution14_2.nim

run_15_1: bin/solution15_1
	./bin/solution15_1

bin/solution15_1: src/solution15_1.nim
	nim c --verbosity:0 --out:bin/ src/solution15_1.nim

run_15_2: bin/solution15_2
	./bin/solution15_2

bin/solution15_2: src/solution15_2.nim
	nim c --verbosity:0 --out:bin/ src/solution15_2.nim

run_16_1: bin/solution16_1
	./bin/solution16_1

bin/solution16_1: src/solution16_1.nim
	nim c --verbosity:0 --out:bin/ src/solution16_1.nim

run_16_2: bin/solution16_2
	./bin/solution16_2

bin/solution16_2: src/solution16_2.nim
	nim c --verbosity:0 --out:bin/ src/solution16_2.nim

run_17_1: bin/solution17_1
	./bin/solution17_1

bin/solution17_1: src/solution17_1.nim
	nim c --verbosity:0 --out:bin/ src/solution17_1.nim

run_17_2: bin/solution17_2
	./bin/solution17_2

bin/solution17_2: src/solution17_2.nim
	nim c --verbosity:0 --out:bin/ src/solution17_2.nim

run_18_1: bin/solution18_1
	./bin/solution18_1

bin/solution18_1: src/solution18_1.nim
	nim c --verbosity:0 --out:bin/ src/solution18_1.nim

run_18_2: bin/solution18_2
	./bin/solution18_2

bin/solution18_2: src/solution18_2.nim
	nim c --verbosity:0 --out:bin/ src/solution18_2.nim

run_19_1: bin/solution19_1
	./bin/solution19_1

bin/solution19_1: src/solution19_1.nim
	nim c --verbosity:0 --out:bin/ src/solution19_1.nim

run_19_2: bin/solution19_2
	./bin/solution19_2

bin/solution19_2: src/solution19_2.nim
	nim c --verbosity:0 --out:bin/ src/solution19_2.nim

run_20_1: bin/solution20_1
	./bin/solution20_1

bin/solution20_1: src/solution20_1.nim
	nim c --verbosity:0 --out:bin/ src/solution20_1.nim

run_20_2: bin/solution20_2
	./bin/solution20_2

bin/solution20_2: src/solution20_2.nim
	nim c --verbosity:0 --out:bin/ src/solution20_2.nim

run_21_1: bin/solution21_1
	./bin/solution21_1

bin/solution21_1: src/solution21_1.nim
	nim c --verbosity:0 --out:bin/ src/solution21_1.nim

run_21_2: bin/solution21_2
	./bin/solution21_2

bin/solution21_2: src/solution21_2.nim
	nim c --verbosity:0 --out:bin/ src/solution21_2.nim

run_22_1: bin/solution22_1
	./bin/solution22_1

bin/solution22_1: src/solution22_1.nim
	nim c --verbosity:0 --out:bin/ src/solution22_1.nim

run_22_2: bin/solution22_2
	./bin/solution22_2

bin/solution22_2: src/solution22_2.nim
	nim c --verbosity:0 --out:bin/ src/solution22_2.nim

run_23_1: bin/solution23_1
	./bin/solution23_1

bin/solution23_1: src/solution23_1.nim
	nim c --verbosity:0 --out:bin/ src/solution23_1.nim

run_23_2: bin/solution23_2
	./bin/solution23_2

bin/solution23_2: src/solution23_2.nim
	nim c --verbosity:0 --out:bin/ src/solution23_2.nim

run_24_1: bin/solution24_1
	./bin/solution24_1

bin/solution24_1: src/solution24_1.nim
	nim c --verbosity:0 --out:bin/ src/solution24_1.nim

run_24_2: bin/solution24_2
	./bin/solution24_2

bin/solution24_2: src/solution24_2.nim
	nim c --verbosity:0 --out:bin/ src/solution24_2.nim

run_25_1: bin/solution25_1
	./bin/solution25_1

bin/solution25_1: src/solution25_1.nim
	nim c --verbosity:0 --out:bin/ src/solution25_1.nim
