# Interquartile Range and Boxplot Fences

## Equation

$$
\begin{aligned}
\mark[iqr]{\mathrm{IQR}} &= \mark[q3]{Q_3} - \mark[q1]{Q_1} \\[8pt]
\mark[fence]{\text{fences}} &= \left[\, \mark[q1]{Q_1} - \mark[k]{1.5} \cdot \mark[iqr]{\mathrm{IQR}},\; \mark[q3]{Q_3} + \mark[k]{1.5} \cdot \mark[iqr]{\mathrm{IQR}} \,\right]
\end{aligned}
$$

## Description

The [interquartile range]{.iqr} is the width of the middle half of the data: from the [first quartile]{.q1} to the [third quartile]{.q3}. It is the box in a boxplot. The whiskers reach out at most [1.5 box-widths]{.k} beyond the box; points outside these [fences]{.fence} are drawn individually as potential outliers.

Read aloud: [I Q R]{.iqr} equals [Q three]{.q3} minus [Q one]{.q1}. The [fences]{.fence} run from [Q one]{.q1} minus [one point five]{.k} times [I Q R]{.iqr} to [Q three]{.q3} plus [one point five]{.k} times [I Q R]{.iqr}.

## .iqr

Interquartile range $\mathrm{IQR}$.

Pronounced: "I Q R", or "the interquartile range".

A robust measure of spread: it ignores the lowest and highest 25% of values, so a single extreme outlier cannot change it. For normally distributed data, $\mathrm{IQR} \approx 1.35\,\sigma$.

In pandas: `df.x.quantile(0.75) - df.x.quantile(0.25)`.

## .q1

First quartile $Q_1$.

Pronounced: "Q one". Also the 25th percentile.

A quarter of the observations lie below it. There are several conventions for interpolating between data points, so different software can give slightly different values on small samples.

## .q3

Third quartile $Q_3$.

Pronounced: "Q three". Also the 75th percentile.

Three quarters of the observations lie below it. The median is $Q_2$.

## .fence

Tukey's fences.

Pronounced: "the fences", or "the whisker limits".

Values outside this interval are flagged as potential outliers. "Potential" matters: in heavy-tailed or skewed data many genuine values fall outside, so a flagged point is a prompt to look, not a reason to delete.

## .k

Tukey's constant $1.5$.

Pronounced: "one point five".

A convention from John Tukey, not a law of nature. For normal data, about 0.7% of observations fall outside the fences. Using 3 instead of 1.5 flags only "far out" points.
