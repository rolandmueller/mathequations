# Pairs Bootstrap for Regression

## Equation

$$
\begin{aligned}
\mark[resample]{(x_i^{*}, y_i^{*})} &\sim \mark[pairs]{\{ (x_1, y_1), \dots, (x_n, y_n) \}} \\[8pt]
\mark[ci]{\mathrm{CI}_{95\%}(\beta_1)} &= \Big[ \, \mark[lower]{\hat{\beta}^{*}_{1,(2.5\%)}} , \; \mark[upper]{\hat{\beta}^{*}_{1,(97.5\%)}} \, \Big]
\end{aligned}
$$

## Description

How uncertain is a fitted slope? [Resample whole (x, y) pairs]{.resample} with replacement from the [observed pairs]{.pairs}, keeping each x with its own y, refit the line, and record the slope. Repeating this thousands of times gives a distribution of slopes, and its [2.5th]{.lower} and [97.5th percentiles]{.upper} form a [95% confidence interval for the slope]{.ci}.

Read aloud: [x i star, y i star]{.resample} is drawn from [the observed pairs]{.pairs}. [The 95 percent confidence interval for beta one]{.ci} runs from [the 2.5th percentile of the bootstrap slopes]{.lower} to [the 97.5th percentile]{.upper}.

## .resample

Resampled pair $(x_i^{*}, y_i^{*})$.

Pronounced: "x i star, y i star".

Resample indices, not values, so the pairs stay intact: `inds = np.random.choice(np.arange(n), size=n)`, then `slope, intercept = np.polyfit(x[inds], y[inds], 1)`.

## .pairs

Observed pairs.

Pronounced: "the observed pairs".

Each row of the data is one case. Shuffling x and y separately would destroy the relationship; that is what a permutation test does on purpose, not a bootstrap.

## .ci

Confidence interval for the slope.

Pronounced: "the 95 percent confidence interval for beta one".

Compare it with the formula interval $\hat{\beta}_1 \pm 2\,\mathrm{SE}(\hat{\beta}_1)$ from ISLR 3.1.2. The pairs bootstrap does not assume constant error variance, so it stays honest when the scatter fans out. Plotting the bootstrapped lines on top of the data shows the uncertainty directly.

## .lower

Lower bound.

Pronounced: "the 2.5th percentile of the bootstrap slopes".

## .upper

Upper bound.

Pronounced: "the 97.5th percentile of the bootstrap slopes".

The same replicates also give intervals for the intercept or for a prediction at a given x.
