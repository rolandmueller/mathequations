# A/B Test for Two Proportions

## Equation

$$
\mark[z]{z} = \frac{\mark[pa]{\hat{p}_A} - \mark[pb]{\hat{p}_B}}{\sqrt{\mark[pool]{\hat{p}\,(1-\hat{p})} \left( \mark[na]{\frac{1}{n_A}} + \mark[nb]{\frac{1}{n_B}} \right)}}
$$

## Description

An A/B test compares the [conversion rate of version A]{.pa} with the [conversion rate of version B]{.pb}. The [z-score]{.z} divides their difference by its standard error, built from the [pooled variance of a single yes/no outcome]{.pool} and the [sizes of group A]{.na} and [group B]{.nb}.

Read aloud: [z]{.z} equals [p hat A]{.pa} minus [p hat B]{.pb}, over the square root of [p hat times one minus p hat]{.pool} times [one over n A]{.na} plus [one over n B]{.nb}.

## .z

Two-proportion z statistic.

Pronounced: "z".

Approximately standard normal under $H_0: p_A = p_B$, so $|z| > 1.96$ is significant at the 5% level. Needs enough successes and failures in each group (a rule of thumb is at least 10 of each). `statsmodels.stats.proportion.proportions_ztest`.

Decide the sample size in advance. Peeking at the result daily and stopping when it looks significant inflates false positives.

## .pa

Observed rate in group A, $\hat{p}_A$.

Pronounced: "p hat A".

Successes divided by visitors in group A.

## .pb

Observed rate in group B, $\hat{p}_B$.

Pronounced: "p hat B".

## .pool

Pooled Bernoulli variance $\hat{p}(1-\hat{p})$.

Pronounced: "p hat times one minus p hat".

$\hat{p}$ is the overall rate with both groups combined, which is the best estimate if the null hypothesis ($p_A = p_B$) is true. $p(1-p)$ is the variance of a single 0/1 outcome; it is largest at $p = 0.5$.

## .na

$\frac{1}{n_A}$.

Pronounced: "one over n A".

$n_A$ is the number of visitors who saw version A.

## .nb

$\frac{1}{n_B}$.

Pronounced: "one over n B".

Small rates need large groups: detecting a lift from 2.0% to 2.2% takes tens of thousands of visitors per group.
