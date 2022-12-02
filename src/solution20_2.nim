
proc run20_2(): string =
    const input = staticRead"../input/day20.txt"

    return "TODO"

when not defined(js):
    echo run20_2()
else:
    proc js_run20_2(): cstring {.exportc.} =
        return cstring(run20_2())
