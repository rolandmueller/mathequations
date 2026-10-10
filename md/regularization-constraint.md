# Regularization as a Constraint

## Equation

$$
\begin{aligned}
\text{Lasso:}\quad & \mark[min]{\underset{\beta}{\text{minimize}}} \; \mark[rss]{\mathrm{RSS}} \;\; \mark[st]{\text{subject to}} \;\; \mark[l1]{\sum_{j=1}^{p} |\beta_j|} \le \mark[budget]{s} \\[8pt]
\text{Ridge:}\quad & \mark[min]{\underset{\beta}{\text{minimize}}} \; \mark[rss]{\mathrm{RSS}} \;\; \mark[st]{\text{subject to}} \;\; \mark[l2]{\sum_{j=1}^{p} \beta_j^2} \le \mark[budget]{s}
\end{aligned}
$$

## Description

The same two methods, seen geometrically. [Find the coefficients]{.min} with the smallest [residual sum of squares]{.rss}, [but only among those]{.st} whose size stays within a [budget]{.budget}. The lasso measures size by the [sum of absolute values]{.l1}, a diamond-shaped region; ridge by the [sum of squares]{.l2}, a circle. The best fit usually touches a corner of the diamond, where some coefficients are exactly zero; a circle has no corners.

Read aloud: [minimize over beta]{.min} [the R S S]{.rss} [subject to]{.st} [the sum of absolute values of beta j]{.l1}, or for ridge [the sum of beta j squared]{.l2}, being at most [s]{.budget}.

## .min

Minimization over the coefficients.

Pronounced: "minimize over beta".

## .rss

Residual sum of squares $\mathrm{RSS}$.

Pronounced: "the R S S".

Its contours are ellipses around the unconstrained least squares solution. The constrained solution is where the smallest ellipse touches the allowed region (ISLR 6.2.2, Figure 6.7).

## .st

"Subject to".

Pronounced: "subject to".

Turns the penalty form ("RSS plus lambda times penalty") into a hard limit. For every $\lambda$ there is a budget $s$ that gives the same solution, and vice versa.

## .l1

L1 norm $\sum_{j=1}^{p} |\beta_j|$.

Pronounced: "the sum of absolute values of beta j".

In two dimensions, $|\beta_1| + |\beta_2| \le s$ is a diamond with corners on the axes. Corners mean sparse solutions, which is why the lasso selects variables.

## .l2

Squared L2 norm $\sum_{j=1}^{p} \beta_j^2$.

Pronounced: "the sum of beta j squared".

$\beta_1^2 + \beta_2^2 \le s$ is a disk: coefficients shrink smoothly but almost never hit exactly zero.

## .budget

Budget $s$.

Pronounced: "s".

A large $s$ includes the least squares solution and changes nothing; a small $s$ forces strong shrinkage. The explained.ai article on regularization animates exactly this picture.
