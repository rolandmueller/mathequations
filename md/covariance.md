# Sample Covariance

## Equation

$$
\mark[cov]{s_{xy}} = \mark[bessel]{\frac{1}{n-1}} \mark[sum]{\sum_{i=1}^{n}} \left( \mark[xval]{x_i} - \mark[xmean]{\bar{x}} \right) \left( \mark[yval]{y_i} - \mark[ymean]{\bar{y}} \right)
$$

## Description

[Covariance]{.cov} asks whether two variables move together. For each case, multiply how far [x]{.xval} is from [its mean]{.xmean} by how far [y]{.yval} is from [its mean]{.ymean}. If both are above or both are below their means, the product is positive. [Add these products up]{.sum} and [average with n − 1]{.bessel}.

Read aloud: [s sub x y]{.cov} equals [one over n minus one]{.bessel} times [the sum from i equals one to n]{.sum} of [x sub i]{.xval} minus [x bar]{.xmean}, times [y sub i]{.yval} minus [y bar]{.ymean}.

## .cov

Sample covariance $s_{xy}$.

Pronounced: "s sub x y", or "the covariance of x and y". Also written $\mathrm{cov}(x, y)$, read "cov of x and y".

The subscript $xy$ names the two variables involved, not an index. The covariance is positive when $x$ and $y$ tend to deviate in the same direction, negative when they deviate in opposite directions, and near zero when there is no linear association.

Its unit is the product of the two units, so its magnitude is hard to interpret. That is the motivation for the correlation coefficient. Note that $s_{xx} = s_x^2$: variance is the covariance of a variable with itself.

## .bessel

Bessel's correction $\frac{1}{n-1}$.

Pronounced: "one over n minus one".

$n$ is the number of cases, i.e. pairs $(x_i, y_i)$. The correction makes $s_{xy}$ unbiased for the population covariance $\sigma_{xy}$ ("sigma sub x y"), since both means were estimated from the data.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

The same running index $i$ appears in both $x_i$ and $y_i$. That is what keeps the data paired: case 3's $x$ is always multiplied with case 3's $y$. $n$ is the number of cases.

## .xval

Observation $x_i$ of the first variable.

Pronounced: "x sub i".

The first variable's value for case $i$.

## .xmean

Mean $\bar{x}$ of the first variable.

Pronounced: "x bar".

## .yval

Observation $y_i$ of the second variable.

Pronounced: "y sub i".

The second variable's value for the same case $i$ as $x_i$.

## .ymean

Mean $\bar{y}$ of the second variable.

Pronounced: "y bar".
