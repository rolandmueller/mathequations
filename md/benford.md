# Benford's Law

## Equation

$$
\mark[p]{P(d)} = \mark[log]{\log_{10}}\left( \mark[one]{1} + \mark[recip]{\frac{1}{d}} \right)
$$

## Description

In many real-world datasets (populations, river lengths, invoices, stock prices) the [probability that a number starts with digit d]{.p} is far from uniform: about 30% start with 1 and fewer than 5% with 9. The rule is the [base-10 logarithm]{.log} of [one]{.one} plus [one over d]{.recip}.

Read aloud: [P of d]{.p} equals [log base ten]{.log} of [one]{.one} plus [one over d]{.recip}.

## .p

Probability of leading digit $d$, $P(d)$.

Pronounced: "P of d".

$d$ is the first significant digit, 1 to 9. $P(1) \approx 30.1\%$, $P(2) \approx 17.6\%$, down to $P(9) \approx 4.6\%$.

Applies to data spanning several orders of magnitude, often produced by multiplicative growth. It does not apply to bounded or assigned numbers such as heights, phone numbers, or prices clustered around €9.99. Forensic accountants use deviations from it to flag fabricated figures.

## .log

Base-10 logarithm $\log_{10}$.

Pronounced: "log base ten".

$\log_{10} x$ is the power of 10 that gives $x$; it counts orders of magnitude. On a logarithmic scale the stretch from 1 to 2 is as long as from 10 to 20 or 100 to 200, and it covers about 30% of each decade, which is exactly $P(1)$.

## .one

$1$.

Pronounced: "one".

## .recip

$\frac{1}{d}$.

Pronounced: "one over d".

Together, $1 + \frac{1}{d} = \frac{d+1}{d}$, so $P(d) = \log_{10}(d+1) - \log_{10}(d)$: the share of the log scale between $d$ and $d+1$.
