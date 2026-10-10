# Empirical Cumulative Distribution Function

## Equation

$$
\mark[ecdf]{\hat{F}_n(x)} = \mark[norm]{\frac{1}{n}} \mark[sum]{\sum_{i=1}^{n}} \mark[ind]{\mathbb{I}}\left( \mark[value]{x_i} \le \mark[point]{x} \right)
$$

## Description

The [ECDF]{.ecdf} answers: what fraction of the data is at most a given [value x]{.point}? [Count]{.ind} the [observations]{.value} that are less than or equal to it, [over all n data points]{.sum}, and [divide by n]{.norm}. Plotted, it is a staircase that climbs from 0 to 1, with one step of height 1/n per observation.

Read aloud: [F hat n of x]{.ecdf} equals [one over n]{.norm} times [the sum from i equals one to n]{.sum} of [the indicator]{.ind} that [x sub i]{.value} is at most [x]{.point}.

## .ecdf

Empirical CDF $\hat{F}_n(x)$.

Pronounced: "F hat n of x".

Shows every data point with no binning choices, unlike a histogram. Quantiles are read off sideways: the median is where the ECDF crosses 0.5, $Q_1$ where it crosses 0.25. Overlaying the ECDF of the data and the CDF of a fitted model (or of simulated samples) is a quick check of a distributional assumption.

In numpy: `x = np.sort(data); y = np.arange(1, n + 1) / n`, then plot `y` against `x` as points or steps.

## .norm

Normalization $\frac{1}{n}$.

Pronounced: "one over n".

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

## .ind

Indicator function $\mathbb{I}(\cdot)$.

Pronounced: "the indicator that".

1 if the condition holds, 0 otherwise.

## .value

Observation $x_i$.

Pronounced: "x sub i".

## .point

Evaluation point $x$.

Pronounced: "x".

Any number on the horizontal axis, not necessarily a data value. As $n$ grows, $\hat{F}_n$ converges to the true CDF $F(x) = P(X \le x)$ (Glivenko–Cantelli), which is why resampling from the data (the bootstrap) works.
