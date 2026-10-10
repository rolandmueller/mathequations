# Expected Value

## Equation

$$
\mark[ev]{E[X]} = \mark[sum]{\sum_{x}} \mark[value]{x} \, \mark[prob]{P(X = x)}
$$

## Description

The [expected value]{.ev} is the long-run average of a random quantity. Go through [every possible outcome]{.sum}, weight each [value]{.value} by its [probability]{.prob}, and add up. For a fair die every face has probability 1/6, so the expected value is (1 + 2 + 3 + 4 + 5 + 6)/6 = 3.5, a value the die can never actually show.

Read aloud: [the expected value of X]{.ev} equals [the sum over all x]{.sum} of [x]{.value} times [the probability that X equals x]{.prob}.

## .ev

Expected value $E[X]$.

Pronounced: "the expected value of X", or "E of X". Also written $\mu$.

The population counterpart of the sample mean: $\bar{x}$ is the same formula with probabilities replaced by observed relative frequencies. Expectation is linear, $E[aX + b] = a\,E[X] + b$ and $E[X + Y] = E[X] + E[Y]$, so two dice sum to 7 on average.

The variance is an expected value too: $\mathrm{Var}(X) = E[(X - \mu)^2]$, which is $35/12 \approx 2.92$ for one die.

## .sum

Sum over outcomes $\sum_{x}$.

Pronounced: "the sum over all x".

Runs over the possible values, not over observations. For a continuous variable the sum becomes an integral, $\int x\, f(x)\,dx$.

## .value

Outcome $x$.

Pronounced: "x".

Capital $X$ is the random variable (the toss before it happens); lowercase $x$ is a particular value it can take.

## .prob

Probability $P(X = x)$.

Pronounced: "the probability that X equals x".

Simulate to check: `np.random.randint(1, 7, size=100_000).mean()` is close to 3.5. Careful: the upper bound of `randint` is exclusive, so `randint(1, 6)` never rolls a 6. With the newer generator API: `rng = np.random.default_rng(); rng.integers(1, 7, size=n)`.
