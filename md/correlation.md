# Pearson Correlation

## Equation

$$
\mark[corr]{r_{xy}} = \frac{\mark[cov]{s_{xy}}}{\mark[sdx]{s_x} \, \mark[sdy]{s_y}}
$$

## Description

The [correlation]{.corr} is the [covariance]{.cov} with the units divided out: rescale by the [standard deviation of x]{.sdx} and the [standard deviation of y]{.sdy}. Equivalently, it is the covariance of the two z-scored variables. In expanded form, the hidden running index i still pairs each x sub i with its y sub i, across all n cases.

Read aloud: [r sub x y]{.corr} equals [s sub x y]{.cov} over [s sub x]{.sdx} times [s sub y]{.sdy}.

## .corr

Pearson correlation $r_{xy}$.

Pronounced: "r sub x y", or simply "r". Also "Pearson's r".

The subscript $xy$ names the two variables. The value is bounded in $[-1, 1]$ (Cauchy–Schwarz). $\pm 1$ means the points lie exactly on a line. $0$ means no linear association: a perfect U-shaped relation can still give $r = 0$.

$r^2$ ("r squared") is the share of variance in $y$ explained by a linear regression on $x$. Pearson's $r$ is sensitive to outliers and to range restriction, and is attenuated by measurement error in either variable. The population correlation is $\rho$ ("rho").

## .cov

Sample covariance $s_{xy}$.

Pronounced: "s sub x y".

Carries the sign and the raw co-movement. The $\frac{1}{n-1}$ factors in numerator and denominator cancel, so $r$ does not depend on that choice.

## .sdx

Standard deviation $s_x$ of the first variable.

Pronounced: "s sub x".

Here the subscript names the variable, not an observation. Dividing by it removes the unit of $x$.

## .sdy

Standard deviation $s_y$ of the second variable.

Pronounced: "s sub y".

Dividing by it removes the unit of $y$.
