# Lp Norm of a Vector

## Equation

$$
\begin{aligned}
\mark[norm]{\lVert \mathbf{x} \rVert_p} &= \Big( \mark[sum]{\sum_{i=1}^{n}} \mark[abs]{|x_i|}^{\mark[p]{p}} \Big)^{\mark[root]{1/p}} \\[10pt]
\mark[l1]{\lVert \mathbf{x} \rVert_1} &= \mark[sum]{\sum_{i=1}^{n}} \mark[abs]{|x_i|} \\[10pt]
\mark[l2]{\lVert \mathbf{x} \rVert_2} &= \sqrt{\mark[sum]{\sum_{i=1}^{n}} \mark[abs]{|x_i|}^{\mark[p]{2}}} \\[10pt]
\mark[linf]{\lVert \mathbf{x} \rVert_\infty} &= \mark[max]{\max_{i}} \, \mark[abs]{|x_i|}
\end{aligned}
$$

## Description

A norm measures the size, or length, of a vector. The [Lp norm]{.norm} takes the [absolute value of each component]{.abs}, raises it to the [power p]{.p}, [adds them up]{.sum}, and then takes the [p-th root]{.root} to undo the power. The choice of p decides how strongly large components count: The two most used cases are written out below: with p = 1 the [L1 norm]{.l1} simply adds up the absolute values, and with p = 2 the [L2 norm]{.l2} is the ordinary straight-line length, the square root of the sum of squares. The larger p gets, the more the largest component dominates, until in the limit p → ∞ only the [largest]{.max} absolute value is left: the [maximum norm]{.linf}.

Read aloud: [the L p norm of x]{.norm} equals [the sum from i equals one to n]{.sum} of [the absolute value of x i]{.abs} to the [p]{.p}, all to the power [one over p]{.root}. [The L1 norm of x]{.l1} equals [the sum]{.sum} of [the absolute values of x i]{.abs}. [The L2 norm of x]{.l2} equals the square root of [the sum]{.sum} of [x i]{.abs} [squared]{.p}. [The L infinity norm of x]{.linf} equals [the maximum over i]{.max} of [the absolute value of x i]{.abs}.

## .norm

Lp norm $\lVert \mathbf{x} \rVert_p$.

Pronounced: "the L p norm of x", or "the p-norm of x".

The rows below write out the three most used cases: $p = 1$, $p = 2$ and the limit $p \to \infty$.

The norm of a difference, $\lVert \mathbf{x} - \mathbf{y} \rVert_p$, is the distance between two points: KNN uses Euclidean distance by default, and `KNeighborsClassifier(p=1)` switches to Manhattan distance. In numpy: `np.linalg.norm(x, ord=p)`.

## .l1

L1 norm $\lVert \mathbf{x} \rVert_1$, the case $p = 1$.

Pronounced: "the L1 norm of x", or "the one-norm of x".

The Manhattan or taxicab length: the distance you walk on a street grid, where you cannot cut diagonally. With $p = 1$ both the power and the root disappear, leaving the plain sum of absolute values. For the vector $(3, 4)$ it is $3 + 4 = 7$.

It is the lasso penalty $\sum_j |\beta_j|$. Every component counts in proportion to its size, so shrinking a small coefficient to exactly zero pays off as much as shrinking a large one; that is why the lasso selects variables. `np.linalg.norm(x, ord=1)`.

## .l2

L2 norm $\lVert \mathbf{x} \rVert_2$, the case $p = 2$.

Pronounced: "the L2 norm of x", or "the Euclidean norm of x". Often written just $\lVert \mathbf{x} \rVert$.

The ordinary straight-line length, from Pythagoras: for the vector $(3, 4)$ it is $\sqrt{9 + 16} = 5$. With $p = 2$ the root $1/p$ becomes a square root, and squaring makes the absolute value unnecessary.

Its square, $\lVert \beta \rVert_2^2 = \sum_j \beta_j^2$, is the ridge penalty: large coefficients are punished much more than small ones, so ridge shrinks them smoothly but never exactly to zero. The distance $\lVert \mathbf{x} - \mathbf{y} \rVert_2$ is the default distance in KNN and k-means. `np.linalg.norm(x)` computes it by default.

## .linf

Maximum norm $\lVert \mathbf{x} \rVert_\infty$, the limit $p \to \infty$.

Pronounced: "the L infinity norm of x", or "the max norm of x". Also called the Chebyshev or uniform norm.

As $p$ grows, the largest $|x_i|^p$ outweighs all the others, and the $p$-th root brings it back to $|x_i|$; in the limit only the largest component counts. For the vector $(3, 4)$ it is 4, compared with 5 for the L2 norm and 7 for the L1 norm: always $\lVert \mathbf{x} \rVert_\infty \le \lVert \mathbf{x} \rVert_2 \le \lVert \mathbf{x} \rVert_1$.

As a distance, $\lVert \mathbf{x} - \mathbf{y} \rVert_\infty$ is the number of moves a king needs on a chessboard. It measures the worst case: the maximum error of a prediction across all points, or the largest single weight in a model. `np.linalg.norm(x, ord=np.inf)`.

## .max

Maximum over the components $\max_i$.

Pronounced: "the maximum over i of".

Picks the largest of the $n$ absolute values. The unit ball of the maximum norm is a square (a cube in three dimensions).

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

Runs over the $n$ components of the vector, e.g. the coefficients $\beta_1, \dots, \beta_p$ of a regression model.

## .abs

Absolute value of a component $|x_i|$.

Pronounced: "the absolute value of x i".

Makes negative components count as much as positive ones.

## .p

Exponent $p \ge 1$.

Pronounced: "p".

In the L2 row it is set to 2. Small $p$ treats all components evenly; large $p$ lets the biggest component dominate. The set of vectors with norm at most 1 (the unit ball) is a diamond for $p = 1$, a circle for $p = 2$, and a square for $p = \infty$; the corners of the diamond are why the lasso produces exactly-zero coefficients. For $p < 1$ the formula is no longer a proper norm.

## .root

Outer exponent $1/p$, the p-th root.

Pronounced: "to the power one over p".

Brings the result back to the scale of the components: doubling every component doubles the norm. Regularization penalties often drop this root (ridge uses $\lVert \beta \rVert_2^2$ rather than $\lVert \beta \rVert_2$), which changes the scale but not which vectors count as larger.
