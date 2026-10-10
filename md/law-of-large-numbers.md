# Law of Large Numbers

## Equation

$$
\mark[mean]{\bar{X}_n} = \mark[norm]{\frac{1}{n}} \mark[sum]{\sum_{i=1}^{n}} \mark[draw]{X_i} \;\; \mark[conv]{\xrightarrow{\; n \to \infty \;}} \;\; \mark[mu]{\mu}
$$

## Description

The [average of many independent draws]{.mean}, that is the [sum]{.sum} of the [individual draws]{.draw} [divided by their number]{.norm}, [settles down to]{.conv} the [true expected value]{.mu} as the number of draws grows. Toss a die 10 times and the average may be 4.2; toss it 100000 times and it will be very close to 3.5. This is why simulation works: averaging many random draws recovers probabilities and expectations.

Read aloud: [x bar n]{.mean}, which is [one over n]{.norm} times [the sum from i equals one to n]{.sum} of [X i]{.draw}, [converges as n goes to infinity]{.conv} to [mu]{.mu}.

## .mean

Sample mean of the first $n$ draws, $\bar{X}_n$.

Pronounced: "x bar n".

Applied to a 0/1 indicator (e.g. "rolled a six"), the average is a relative frequency, so relative frequencies converge to probabilities. This is what justifies estimating $P(A \mid B)$ from groupby means.

## .norm

Normalization $\frac{1}{n}$.

Pronounced: "one over n".

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

## .draw

Random draw $X_i$.

Pronounced: "X i".

Independent and identically distributed (i.i.d.): each draw comes from the same distribution and does not influence the others. `np.random.rand(n)` draws uniformly from $[0, 1)$, `np.random.randn(n)` from the standard normal, `np.random.randint(1, 7, n)` simulates dice.

## .conv

Convergence as $n \to \infty$.

Pronounced: "converges as n goes to infinity to".

Plot the running average `np.cumsum(x) / np.arange(1, n + 1)` to see it wander and then settle. No "catching up" is involved: after a streak of sixes, future tosses are not less likely to be six (the gambler's fallacy); the streak is simply diluted by many later tosses.

How fast it settles is given by the central limit theorem: the typical error is $\sigma / \sqrt{n}$.

## .mu

Expected value $\mu = E[X]$.

Pronounced: "mu".

Must exist; for very heavy-tailed distributions (e.g. the Cauchy) the average never settles.
