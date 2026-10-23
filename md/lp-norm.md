# Lp Norm of a Vector

## Equation

$$
\mark[norm]{\lVert \mathbf{x} \rVert_p} = \Big( \mark[sum]{\sum_{i=1}^{n}} \mark[abs]{|x_i|}^{\mark[p]{p}} \Big)^{\mark[root]{1/p}}
$$

## Description

A norm measures the size, or length, of a vector. The [Lp norm]{.norm} takes the [absolute value of each component]{.abs}, raises it to the [power p]{.p}, [adds them up]{.sum}, and then takes the [p-th root]{.root} to undo the power. The choice of p decides how strongly large components count: p = 1 adds the components up, p = 2 is the ordinary straight-line length, and the larger p gets, the more the largest component dominates.

Read aloud: [the L p norm of x]{.norm} equals [the sum from i equals one to n]{.sum} of [the absolute value of x i]{.abs} to the [p]{.p}, all to the power [one over p]{.root}.

## .norm

Lp norm $\lVert \mathbf{x} \rVert_p$.

Pronounced: "the L p norm of x", or "the p-norm of x".

The most common cases: for $p = 1$, $\lVert \mathbf{x} \rVert_1 = \sum |x_i|$ is the Manhattan or taxicab length, the lasso penalty. For $p = 2$, $\lVert \mathbf{x} \rVert_2 = \sqrt{\sum x_i^2}$ is the Euclidean length; its square is the ridge penalty. As $p \to \infty$, $\lVert \mathbf{x} \rVert_\infty = \max_i |x_i|$, the largest component.

The norm of a difference, $\lVert \mathbf{x} - \mathbf{y} \rVert_p$, is the distance between two points: KNN uses Euclidean distance by default, and `KNeighborsClassifier(p=1)` switches to Manhattan distance. In numpy: `np.linalg.norm(x, ord=p)`.

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

Small $p$ treats all components evenly; large $p$ lets the biggest component dominate. The set of vectors with norm at most 1 (the unit ball) is a diamond for $p = 1$, a circle for $p = 2$, and a square for $p = \infty$; the corners of the diamond are why the lasso produces exactly-zero coefficients. For $p < 1$ the formula is no longer a proper norm.

## .root

Outer exponent $1/p$, the p-th root.

Pronounced: "to the power one over p".

Brings the result back to the scale of the components: doubling every component doubles the norm. Regularization penalties often drop this root (ridge uses $\lVert \beta \rVert_2^2$ rather than $\lVert \beta \rVert_2$), which changes the scale but not which vectors count as larger.
