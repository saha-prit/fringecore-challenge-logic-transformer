const weirdExpressions = [
  "a othoba b",
  "b ebong c othoba d",
  "ebong ebong othoba othoba ebong",
  "((ebong) othoba ebong) ebong othoba",
  "(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
  "ebong",
];

for (const expression of weirdExpressions) {
  // fill this in
  let newExpression = expression.replaceAll("othoba", "||");
  newExpression = newExpression.replaceAll("ebong", "&&");

  console.log(newExpression);
}
