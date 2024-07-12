export class NQueens {
	public n: number;
	public count: number;
	private board: number[];

	constructor(n: number) {
		this.n = n;
		this.count = 0;
		this.board = new Array(this.n).fill(0);
	}

	public start(): void {
		this.placeQueen(0);
	}

	private placeQueen(pos: number): void {
		if (pos >= this.n) {
			this.count++;
		} else {
			for (let i = 0; i < this.n; i++) {
				if (this.verifyPos(pos, i)) {
					this.board[pos] = i;
					this.placeQueen(pos + 1);
				}
			}
		}
	}

	private verifyPos(checkPos: number, newPos: number): boolean {
		for (let i = 0; i < checkPos; i++) {
			if (this.board[i] === newPos || Math.abs(checkPos - i) === Math.abs(this.board[i] - newPos)) {
				return false;
			}
		}
		return true;
	}
}
