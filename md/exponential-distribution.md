# Exponential Distribution

## Equation

$$
\mark[pdf]{f(t)} = \mark[rate]{\frac{1}{\tau}} \, \mark[exp]{e}^{-\mark[t]{t} / \mark[tau]{\tau}}
$$

## Description

The waiting time between events that happen at random at a constant rate, such as no-hitters in baseball, radioactive decays, or customer arrivals. The [density]{.pdf} of a [waiting time]{.t} starts at its highest value, [one over tau]{.rate}, and [decays exponentially]{.exp}: short waits are common, long waits rare. The [mean waiting time]{.tau} sets the scale.

Read aloud: [f of t]{.pdf} equals [one over tau]{.rate} times [e]{.exp} to the minus [t]{.t} over [tau]{.tau}.

## .pdf

Probability density $f(t)$.

Pronounced: "f of t".

Mean $\tau$ and standard deviation also $\tau$. Memoryless: having waited a long time does not make the next event more likely to arrive soon. If the number of events per unit time is Poisson, the gaps between them are exponential.

Simulate with `np.random.exponential(tau, size)`. Comparing the ECDF of observed gaps with that of simulated exponential draws checks whether events are really random in time.

## .rate

Rate $\frac{1}{\tau}$.

Pronounced: "one over tau".

The average number of events per unit time, often written $\lambda$ ("lambda").

## .exp

Exponential decay $e^{(\cdot)}$.

Pronounced: "e to the".

## .t

Waiting time $t \ge 0$.

Pronounced: "t".

## .tau

Mean waiting time $\tau$.

Pronounced: "tau".

Estimated by the sample mean of the observed gaps, e.g. the average number of games between no-hitters. A bootstrap confidence interval on that mean says how precisely the rate is known.
