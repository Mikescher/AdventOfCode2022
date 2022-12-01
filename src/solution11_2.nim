
proc run11_2(): string =
    return "TODO"

when not defined(js):
    echo run11_2()
else:
    proc js_run11_2(): cstring {.exportc.} =
        return cstring(run11_2())
