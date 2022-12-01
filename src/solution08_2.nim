
proc run08_2(): string =
    return "TODO"

when not defined(js):
    echo run08_2()
else:
    proc js_run08_2(): cstring {.exportc.} =
        return cstring(run08_2())
