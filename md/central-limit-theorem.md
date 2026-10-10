# Central Limit Theorem

## Equation

$$
\mark[mean]{\bar{X}_n} \; \mark[approx]{\overset{\text{approx.}}{\sim}} \; \mark[normal]{\mathcal{N}}\!\left( \mark[mu]{\mu}, \; \frac{\mark[var]{\sigma^2}}{\mark[n]{n}} \right)
$$

## Description

Whatever the shape of the data, the [mean of a sample]{.mean} is [approximately]{.approx} [normally distributed]{.normal} once the sample is large enough. That sampling distribution is centered on the [true mean]{.mu}, and its variance is the [population variance]{.var} divided by the [sample size]{.n}. This is the source of the square-root-of-n law and of most textbook confidence intervals.

Read aloud: [x bar n]{.mean} is [approximately distributed as]{.approx} [a normal]{.normal} with mean [mu]{.mu} and variance [sigma squared]{.var} over [n]{.n}.

## .mean

Sample mean $\bar{X}_n$.

Pronounced: "x bar n".

Capital $X$ because it is a random variable: it would come out differently for each new sample. Simulate it: draw many samples, compute each mean, and look at the histogram or ECDF of the means.

## .approx

"Is approximately distributed as".

Pronounced: "is approximately distributed as".

How large $n$ must be depends on the data. For roughly symmetric data, $n \ge 30$ is the usual rule of thumb (ISRS's "normality condition"); strongly skewed or heavy-tailed data need far more. Observations must be independent.

## .normal

Normal distribution $\mathcal{N}$.

Pronounced: "a normal", or "N".

## .mu

Population mean $\mu$.

Pronounced: "mu".

Sample means are unbiased: they scatter around $\mu$, not around some other value.

## .var

Population variance $\sigma^2$.

Pronounced: "sigma squared".

The spread of individual observations. The CLT requires it to be finite.

## .n

Sample size $n$.

Pronounced: "n".

The standard deviation of the sampling distribution is $\sigma / \sqrt{n}$, the standard error. Four times the data halves the uncertainty.
