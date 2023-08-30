---
hide:
  - toc
---

## Allele description rules

!!! warning "These are rules for allele descriptions, not names!"

| Allele type                            | Example                                                                                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| amino acid insertion                   | A858AMKGYP (insertion of MKGYP after A858, note A before and after number)                                                                 |
| amino acid substitution(s)             | K132A or F256A,F310A                                                                                                                        |
| amino acid insertion and substitution  | A858AMKGYP,F124D                                                                                                                           |
| amino acid insertion and deletion      | A858AMKGYP,100-200,P500*                                                                                                                   |
| partial deletion and amino acid change | 100-200,F124D,P500*                                                                                                                        |
| partial deletion, amino acid           | Specify deleted residues - eg. 100-200 OR 10-20,40-50. Use P500* for nonsense mutation                                                          |
| nucleotide insertion                   | C132CAATTT (insertion of AATTT after C132, note C before and after number)                                                                |
| nucleotide substitution(s)             | A25G, OR A(-25)G (for residues upstream of ATG -protein coding- or transcription start -RNA genes-)                                         |
| partial deletion, nucleotide           | Specify deleted residues - eg. 100-200 OR (-20)-(-30) (for residues upstream of ATG -protein coding- or transcription start -RNA genes-)        |
| partial deletion and nucleotide change | 100-200,A124T,C128G (for residues upstream of ATG -protein coding- or transcription start -RNA genes- use negative numbers in parenthesis) |
| nucleotide insertion and substitution  | T858TAAGA,T(-124)A (for residues upstream of ATG -protein coding- or transcription start -RNA genes- use negative numbers in parenthesis)  |

## Allele naming rules

!!! warning "These are rules for allele names, not descriptions!"

<table>
<tbody>
<tr>
<td colspan="2">
<p><strong>Variant type</strong></p>
</td>
<td>
<p><strong>Example</strong></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Wild type</p>
</td>
<td>
<p><em>ase1+</em></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Knockout / deletion</p>
</td>
<td>
<p><em>ase1&Delta;</em></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>Partial deletion</p>
</td>
<td>
<p>Indicate what&rsquo;s left</p>
</td>
<td>
<p><em>ase1(1-35)</em></p>
<p><em>ase1(1-35, 40-700)</em></p>
</td>
</tr>
<tr>
<td>
<p>Indicate what&rsquo;s missing</p>
</td>
<td>
<p><em>ase1&Delta;(114-120)</em></p>
<p><em>ase1&Delta;(114-120,150-200)</em></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Residue insertion</p>
</td>
<td>
<p><em>ase1-P114PVPAL</em></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>Substitution or deletion-insertion</p>
</td>
<td>
<p>Single residues</p>
</td>
<td>
<p><em>ase1-P114A,Q117A</em></p>
<p><em>ase1-P114*</em></p>
</td>
</tr>
<tr>
<td>
<p>Consecutive residues</p>
</td>
<td>
<p><em>ase1-PLI114AAA</em></p>
<p><em>ase1-PLI114LAVKK</em></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Combinations of the above</p>
</td>
<td>
<p><em>ase1&Delta;(10-20)-P114A,Q117A</em></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Forward genetics, variant unknown</p>
</td>
<td>
<p><em>ase1-35 </em>(must be unique)</p>
</td>
</tr>
<tr>
<td rowspan="6">
<p>CTD</p>
</td>
<td>
<p>All repeats mutated</p>
</td>
<td>
<p><em>rpb1-CTD-Y1F</em></p>
</td>
</tr>
<tr>
<td>
<p>Some repeats mutated</p>
</td>
<td>
<p><em>rpb1-CTD-Y1F(r1-r12)</em></p>
</td>
</tr>
<tr>
<td>
<p>Some repeats deleted</p>
</td>
<td>
<p><em>rpb1-CTD-&Delta;(r11-r29)</em></p>
</td>
</tr>
<tr>
<td>
<p>Motifs mutated every 2 repeats, from repeat 1 to 29.</p>
</td>
<td>
<p><em>rpb1-CTD-Y1F(r1-r29-2)</em></p>
</td>
</tr>
<tr>
<td>
<p>Combinations of the above</p>
</td>
<td>
<p><em>rpb1-CTD-S5A(r1-r12)&Delta;(r13-r29)</em></p>
</td>
</tr>
<tr>
<td>
<p>CTD and non-CTD mutations</p>
</td>
<td>
<p><em>rpb1-N494D-CTD-&Delta;(r11-r29)</em></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

<!-- TODO add paper reference -->