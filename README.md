# useless-progress
Produce a useless automatic scrolling bar that grows on its own.

## Download
```bash
npm i useless-progress
```

## example

```js
import Progress from 'useless-progress';

const progress = new Progress({
  onprogress: function (progress) {
    console.log(progress)
  }
})
progress.start()

/**
 * console.log
 * 0
 * 0.007653891978612326
 * 0.015249201894804387
 * 0.0227863781293538
 * 0.030265865631180278
 * ...
 * 0.9997831489834735
 * 0.9997848087377296
 * 0.9997864557884056
 * 0.9997880902327339
 */
```



## config

| Attractive  | description                                                  | Type     | default |
| ----------- | ------------------------------------------------------------ | -------- | ------- |
| onprogress  | Callback when progress increases，parameter is the current progress | function | -       |
| extremeTime | Time from 0 to 0.99 (ms)                                     | number   | 60000   |
| frequency   | Frequency of progress increase                               | number   | 200     |



## method

| Name          | description                        |
| ------------- | ---------------------------------- |
| start()       |                                    |
| end()         | Stop working and set progress to 1 |
| getProgress() |                                    |
| setProgress() |                                    |

