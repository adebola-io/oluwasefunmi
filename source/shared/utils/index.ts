export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
};

export class AsyncQueue {
  #queue: Array<() => Promise<void>> = [];
  #isProcessing = false;

  push(callback: () => Promise<void>) {
    this.#queue.push(callback);
    this.#process();
  }

  get size() {
    return this.#queue.length;
  }

  async #process() {
    if (this.#isProcessing) return;
    this.#isProcessing = true;

    while (true) {
      const nextCallback = this.#queue.shift();
      if (!nextCallback) break;
      await nextCallback();
    }

    this.#isProcessing = false;
  }
}
