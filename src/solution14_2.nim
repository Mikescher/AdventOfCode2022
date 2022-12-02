
proc run14_2(): string =
    const input = staticRead"../input/day14.txt"

    return "TODO"

when not defined(js):
    echo run14_2()
else:
    proc js_run14_2(): cstring {.exportc.} =
        return cstring(run14_2())
