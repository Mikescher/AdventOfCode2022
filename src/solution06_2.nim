
proc run06_2(): string =
    const input = staticRead"../input/day06.txt"

    return "TODO"

when not defined(js):
    echo run06_2()
else:
    proc js_run06_2(): cstring {.exportc.} =
        return cstring(run06_2())
