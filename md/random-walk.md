# Random Walk

## Equation

$$
\begin{aligned}
\mark[pos]{S_n} &= \mark[sum]{\sum_{i=1}^{n}} \mark[step]{X_i} \\[8pt]
\mark[sd]{\mathrm{SD}(S_n)} &= \mark[root]{\sqrt{n}}
\end{aligned}
$$

## Description

A random walk adds up random steps. The [position after n steps]{.pos} is the [sum]{.sum} of the [individual steps]{.step}, each +1 or −1 with equal chance, like a running tally of coin flips. On average the walker goes nowhere, but the [typical distance from the start]{.sd} grows like the [square root of the number of steps]{.root}: after 100 steps, about 10 away; after 10000, about 100.

Read aloud: [S n]{.pos} equals [the sum from i equals one to n]{.sum} of [X i]{.step}. [The standard deviation of S n]{.sd} equals [the square root of n]{.root}.

## .pos

Position $S_n$.

Pronounced: "S n".

$E[S_n] = 0$, yet the walk rarely sits at 0: it makes long excursions to one side, and the leader in a coin-flip race tends to stay the leader for a long time. Simulate many walks with `np.cumsum(np.random.choice([-1, 1], size=(walks, n)), axis=1)` and look at the spread at each step.

Applications: stock prices (in logs), diffusion of particles, and the running difference between A and B in an A/B test, which wanders by chance; that is why stopping a test the moment it looks significant misleads.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

## .step

Step $X_i = \pm 1$.

Pronounced: "X i".

Independent steps with $P(+1) = P(-1) = \frac{1}{2}$, so mean 0 and variance 1. The number of up-steps $K$ is binomial with $p = \frac{1}{2}$, and $S_n = 2K - n$.

## .sd

Standard deviation of the position, $\mathrm{SD}(S_n)$.

Pronounced: "the standard deviation of S n".

Variances of independent steps add: $\mathrm{Var}(S_n) = n \cdot 1 = n$.

## .root

$\sqrt{n}$.

Pronounced: "the square root of n".

The same $\sqrt{n}$ law as for the standard error: a sum's spread grows like $\sqrt{n}$, so an average's spread shrinks like $1/\sqrt{n}$. By the central limit theorem $S_n / \sqrt{n}$ is approximately standard normal.
