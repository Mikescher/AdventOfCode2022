
proc run12_2(): string =
    const input = staticRead"../input/day12.txt"

    return "TODO"

when not defined(js):
    echo run12_2()
else:
    proc js_run12_2(): cstring {.exportc.} =
        return cstring(run12_2())
