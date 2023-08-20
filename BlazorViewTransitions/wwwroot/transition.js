let isRendering = false;

function waitForFinishedRender() {
    while (isRendering) {
    }
    // if (isRendering) {
    //     console.log('waiting for render');
    //     setTimeout(waitForFinishedRender, 20);
    // }
}

export function renderFinished() {
    console.log('renderFinished called');
    isRendering = false;
}

export function startTransition(dotnetRef) {
    console.log('startTransition');
    document.startViewTransition(() => {
        isRendering = true;
        console.log('before', document.body)
        dotnetRef.invokeMethod('Render');
        waitForFinishedRender();
        console.log('after', document.body);
    });
}
