# Median Absolute Deviation

## Equation

$$
\mark[mad]{\mathrm{MAD}} = \mark[median]{\operatorname{median}_i} \left| \mark[value]{x_i} - \mark[center]{\tilde{x}} \right|
$$

## Description

The [median absolute deviation]{.mad} is the robust cousin of the standard deviation. Measure how far each [observation]{.value} lies from the [median]{.center}, ignore the sign, and take the [median of those distances]{.median}. Medians instead of means make it almost immune to outliers.

Read aloud: [M A D]{.mad} equals [the median over i]{.median} of the absolute value of [x sub i]{.value} minus [x tilde]{.center}.

## .mad

Median absolute deviation $\mathrm{MAD}$.

Pronounced: "M A D", or "mad".

Up to half of the data can be wildly wrong before the MAD breaks down; for the standard deviation, a single bad value is enough. For normal data $\sigma \approx 1.4826 \cdot \mathrm{MAD}$, so that scaled version is used as a robust stand-in for the SD (`scipy.stats.median_abs_deviation(x, scale="normal")`).

Careful: "MAD" sometimes means the mean absolute deviation $\frac{1}{n}\sum |x_i - \bar{x}|$, which is a different (less robust) quantity. pandas' old `.mad()` computed that one.

## .median

Outer median $\operatorname{median}_i$.

Pronounced: "the median over i".

Takes the middle value of the $n$ absolute deviations. The running index $i$ goes through all observations $1, \dots, n$.

## .value

A single observation $x_i$.

Pronounced: "x sub i".

The $i$-th data point.

## .center

Sample median $\tilde{x}$.

Pronounced: "x tilde".

The middle value of the data: half the observations lie below it, half above. It is the center from which deviations are measured, chosen instead of $\bar{x}$ for robustness.
