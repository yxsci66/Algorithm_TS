# 394. decode-string

## 前置知识

- 栈
- 括号匹配

## 思路

遍历输入字符串，遇到数字则更新当前数字，遇到字母则加入当前字符串，遇到左括号则把当前数字和字符串入栈并重置当前数字和字符串，遇到右括号则出栈并解码字符串。

## 代码

```typescript
function decodeString(s: string): string {
  const stack: [number, string][] = [];
  let currStr = "";
  let currNum = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/\d/.test(char)) {
      // 如果是数字，更新当前数字
      currNum = currNum * 10 + Number(char);
    } else if (char === "[") {
      // 如果是左括号，把当前数字和字符串入栈，重置当前数字和字符串
      stack.push([currNum, currStr]);
      currNum = 0;
      currStr = "";
    } else if (char === "]") {
      // 如果是右括号，出栈并解码字符串
      const [num, prevStr] = stack.pop()!;
      currStr = prevStr + currStr.repeat(num);
    } else {
      // 如果是字母，加入当前字符串
      currStr += char;
    }
  }
  return currStr;
}
```

## 复杂度

时间复杂度：O(n)
空间复杂度：O(n)
