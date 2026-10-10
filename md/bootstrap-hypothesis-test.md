# Bootstrap Hypothesis Test

## Equation

$$
\begin{aligned}
\mark[shifted]{\tilde{x}_i} &= \mark[value]{x_i} - \mark[mean]{\bar{x}} + \mark[null]{\mu_0} \\[8pt]
\mark[p]{\hat{p}} &= \mark[norm]{\frac{1}{B}} \mark[sum]{\sum_{b=1}^{B}} \mark[ind]{\mathbb{I}}\left( \mark[rep]{\bar{x}^{*b}} \ge \mark[mean]{\bar{x}} \right)
\end{aligned}
$$

## Description

To test whether the true mean could be the [hypothesized value mu zero]{.null}, first build a world where the null hypothesis holds: [shift every observation]{.shifted} so the data keep their shape but have mean [mu zero]{.null} instead of the [observed mean]{.mean}. Then bootstrap from the shifted data, compute the [mean of each resample]{.rep}, and [count]{.ind} how often it is at least as large as the [observed mean]{.mean}. That share, [summed over B resamples]{.sum} and [divided by B]{.norm}, is the [p-value]{.p}.

Read aloud: [x tilde sub i]{.shifted} equals [x sub i]{.value} minus [x bar]{.mean} plus [mu zero]{.null}. [p hat]{.p} equals [one over B]{.norm} times [the sum from b equals one to B]{.sum} of [the indicator]{.ind} that [x bar star b]{.rep} is at least [x bar]{.mean}.

## .shifted

Shifted observation $\tilde{x}_i$.

Pronounced: "x tilde sub i".

The data translated so that their mean equals $\mu_0$ exactly, keeping the spread and shape. In numpy: `shifted = data - np.mean(data) + mu0`.

Two-sample version, testing $H_0: \mu_A = \mu_B$: shift each group to the combined mean, $\tilde{x}_{A,i} = x_{A,i} - \bar{x}_A + \bar{x}_{\text{all}}$ and likewise for $B$, bootstrap each group separately, and compare the replicated differences of means with the observed difference.

## .value

Observation $x_i$.

Pronounced: "x sub i".

## .mean

Observed sample mean $\bar{x}$.

Pronounced: "x bar".

Appears twice: as the amount removed by the shift, and as the observed test statistic the replicates are compared with.

## .null

Hypothesized mean $\mu_0$.

Pronounced: "mu zero".

Comes from the question, e.g. a published value from another study.

## .p

Bootstrap p-value $\hat{p}$.

Pronounced: "p hat".

As written, this is one-sided, testing whether the true mean is larger than $\mu_0$; use $\le$ for the other direction, or compare absolute distances from $\mu_0$ for a two-sided test.

Bootstrap test vs. permutation test: a permutation test assumes the two groups have identical distributions under $H_0$; the bootstrap test only assumes equal means, so it can compare a sample with a single number or groups with different spreads.

## .norm

Normalization $\frac{1}{B}$.

Pronounced: "one over B".

$B$ is the number of bootstrap resamples, e.g. 10000.

## .sum

Summation $\sum_{b=1}^{B}$.

Pronounced: "the sum from b equals one to B".

## .ind

Indicator function $\mathbb{I}(\cdot)$.

Pronounced: "the indicator that".

1 if the replicate is at least as extreme as the observed mean, otherwise 0. In numpy: `np.mean(bs_reps >= np.mean(data))`.

## .rep

Bootstrap replicate $\bar{x}^{*b}$.

Pronounced: "x bar star b".

The mean of resample $b$, drawn with replacement from the shifted data $\tilde{x}$, so it varies around $\mu_0$ as the null hypothesis says.
