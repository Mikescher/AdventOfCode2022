
proc run07_2(): string =
    const input = staticRead"../input/day07.txt"

    return "TODO"

when not defined(js):
    echo run07_2()
else:
    proc js_run07_2(): cstring {.exportc.} =
        return cstring(run07_2())
