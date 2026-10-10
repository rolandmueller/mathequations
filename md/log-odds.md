# Log-Odds (Logit)

## Equation

$$
\mark[logodds]{\log\left( \frac{p(X)}{1 - p(X)} \right)} = \mark[b0]{\beta_0} + \mark[b1]{\beta_1} \mark[x]{X}
$$

## Description

Logistic regression is a linear model, but for the [log of the odds]{.logodds}, not for the probability itself. The log-odds equal an [intercept]{.b0} plus a [coefficient]{.b1} times the [predictor]{.x}. So each coefficient says how the log-odds change, which is why interpreting them takes practice.

Read aloud: [the log of p of X over one minus p of X]{.logodds} equals [beta zero]{.b0} plus [beta one]{.b1} times [X]{.x}.

## .logodds

Log-odds, or logit.

Pronounced: "the log of p of X over one minus p of X", or "the log-odds".

The odds $\frac{p}{1-p}$ compare the chance of yes to the chance of no: $p = 0.2$ gives odds $0.25$ ("1 to 4"), $p = 0.9$ gives odds 9 ("9 to 1"). Odds run from 0 to infinity; their log runs over all real numbers, which is what a linear function can produce. $p = 0.5$ means odds 1 and log-odds 0.

Solving for $p$ gives the S-shaped logistic function.

## .b0

Intercept $\beta_0$.

Pronounced: "beta zero".

The log-odds when $X = 0$; $\frac{1}{1 + e^{-\beta_0}}$ is the corresponding probability.

## .b1

Coefficient $\beta_1$.

Pronounced: "beta one".

A one-unit increase in $X$ adds $\beta_1$ to the log-odds, or equivalently multiplies the odds by $e^{\beta_1}$, the odds ratio. In ISLR's Default data the coefficient of balance is about 0.0055: each extra $100 of balance multiplies the odds of default by $e^{0.55} \approx 1.7$.

It does not add a fixed amount to the probability: the same change in log-odds moves $p$ a lot near 0.5 and very little near 0 or 1. The sign is easy to read: positive means higher $X$, higher probability.

## .x

Predictor $X$.

Pronounced: "X".

A 0/1 dummy predictor gives the cleanest reading: $e^{\beta_1}$ is the odds for group 1 divided by the odds for group 0.
