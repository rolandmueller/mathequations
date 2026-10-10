# Precision, Recall and the ROC Rates

## Equation

$$
\begin{aligned}
\mark[precision]{\text{Precision}} &= \frac{\mark[tp]{TP}}{\mark[tp]{TP} + \mark[fp]{FP}} \\[8pt]
\mark[recall]{\text{Recall} = \text{TPR}} &= \frac{\mark[tp]{TP}}{\mark[tp]{TP} + \mark[fn]{FN}} \\[8pt]
\mark[fpr]{\text{FPR}} &= \frac{\mark[fp]{FP}}{\mark[fp]{FP} + \mark[tn]{TN}}
\end{aligned}
$$

## Description

Three rates from the confusion matrix. [Precision]{.precision}: of everything flagged positive, how much really is? [Recall]{.recall}: of all real positives, how many did we catch? [False positive rate]{.fpr}: of all real negatives, how many did we wrongly flag? The counts are [true positives]{.tp}, [false positives]{.fp}, [false negatives]{.fn} and [true negatives]{.tn}. The ROC curve plots recall against the false positive rate as the classification threshold moves from strict to lenient.

Read aloud: [precision]{.precision} equals [T P]{.tp} over [T P]{.tp} plus [F P]{.fp}. [Recall, the true positive rate]{.recall}, equals [T P]{.tp} over [T P]{.tp} plus [F N]{.fn}. [The false positive rate]{.fpr} equals [F P]{.fp} over [F P]{.fp} plus [T N]{.tn}.

## .precision

Precision, or positive predictive value.

Pronounced: "precision".

Matters when false alarms are expensive (spam filters, fraud alerts that freeze accounts). Unlike recall and FPR, it depends on how common positives are: the same test has lower precision in a population where the condition is rare.

The F1 score combines precision and recall as their harmonic mean: $F_1 = \frac{2 \cdot \text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$.

## .recall

Recall, sensitivity, or true positive rate (TPR).

Pronounced: "recall", or "T P R".

Matters when misses are expensive (cancer screening). Predicting everything as positive gives recall 1, so it must always be reported alongside precision or FPR.

## .fpr

False positive rate (FPR).

Pronounced: "F P R".

Equals $1 - \text{specificity}$, where specificity $= \frac{TN}{TN + FP}$ is the true negative rate. The fourth rate in ISLR's Table 4.6 is the negative predictive value, $\frac{TN}{TN + FN}$. The ROC curve runs from $(0, 0)$ (flag nothing) to $(1, 1)$ (flag everything). The area under it (AUC) is the probability that a random positive gets a higher score than a random negative: 0.5 is guessing, 1 is perfect. `sklearn.metrics.roc_curve`, `roc_auc_score`.

For multiclass problems, compute these per class (one-vs-rest) and average: "macro" weights classes equally, "micro" weights observations equally.

## .tp

True positives $TP$.

Pronounced: "T P".

## .fp

False positives $FP$.

Pronounced: "F P".

## .fn

False negatives $FN$.

Pronounced: "F N".

## .tn

True negatives $TN$.

Pronounced: "T N".
