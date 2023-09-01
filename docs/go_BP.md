---
hide:
  - toc
---

??? warning "Before you make a GO annotation"

    * Gene Ontology (GO) annotations are used to describe the normal (wild type) functions, processes and cellular components or locations of a gene product (protein or RNA).
    * A **Biological Process** is a series of events accomplished by one or more ordered assemblies of molecular functions. Some examples are "cell cycle regulation", "ion transport", or "signal transduction".
    * It can be difficult to distinguish between a biological process and a molecular function, but the general rule is that a process must have more than one distinct step.
    * Gene products may be annotated with multiple biological process terms.
    * Phenotypes can be used to support a GO annotation, but they must show direct involvement of the gene in the process, because GO describes the wild-type roles of gene products. For instance, the isolated fact that deleting a gene perturbs spindle assembly is not sufficient to annotate that gene to the biological process "spindle assembly", or even "regulation of spindle assembly". However, combined with further genetic and localization experiments, it can support a GO annotation.

## Video summary

<div class="video-sizer">
    <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/KY7ev8IEG00" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

On the `Quick Links` list, click on `GO biological process` to open a window that requires you to indicate:

* **Gene:** the gene that participates in a biological process. See [how to add genes](./genotype_management.md#adding-genes-info).
* **Term name:** a GO term describing the biological process.
    * Start typing a molecular function in the search box. If you do not find the precise function you are looking for, choose a broad term (e.g. cell cycle, transport) that can be refined later.
    * Click the chosen term, and verify that the displayed definition describes the phenotype you want to annotate. There is sometimes a "Comment" section with extra tips for annotation.
    * If the blue button reads `Next`, click it and see if you can find a more specific term that the one you originally selected. If so, select it and do as before.
    * Otherwise, click `Finish`.
    * If you do not find the term you require, select a broader term, and request a new one clicking on `Suggest a new term` on the right side of the text box.
* **Annotation extension:** this field appears once you have selected a GO term. Always click the `Add` button to see if you can specify:
    * **Links to gene products:** extensions such as `targets`, `processes`, `transports`, etc. link the a biological process with the gene product targeted by that process.
    * **Links to biological processes:** `happens during` can be used to indicate that the biological process takes place during a cell cycle phase or cellular response to stimulus . For example, the transcription factor atf1 participates in "positive regulation of transcription by RNA polymerase II" during "cellular response to oxidative stress".
    * **Links to a cellular component:** `occurs in` can be used to connect a few processes like endocytosis can be linked to the cellular location where they take place.
    * **Links to sequence ontology terms**: `occurs at` indicates the type of DNA region where the process happens. For example, the "positive regulation of transcription by RNA polymerase II" by ste11 transcription factor occurs at promoters with TR boxes.
    * You can make several annotations with the same biological process and gene, with different extensions:
        * To link it to several gene products (e.g. different substrates of a kinase).
        * To indicate that a gene is involved in the same biological process during different cellular responses to stimuli.
* **Evidence code:** the type of experiment where the phenotype was observed.
* **Comment:** it's very useful for us if you indicate the figure or table where this phenotype comes from.
